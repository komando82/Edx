/*
 * c1, c2 - "key columns"
 * c3, c4 - "included columns"
 */

\timing
create table oldt (c1 int, c2 int, c3 int, c4 int);
insert into oldt (select x, 2*x, 3*x, 4 from generate_series(1,10000000) as x);
create unique index olduniqueidx ON oldt using btree (c1, c2);


create table newt (c1 int, c2 int, c3 int, c4 int);
insert into newt (select x, 2*x, 3*x, 4 from generate_series(1,10000000) as x);
create unique index newidx ON newt using btree (c1, c2) including (c3, c4);

\di+

vacuum analyze;

/*
 * Select only key columns.
 * IndexOnlyScan is used for both oldt and newt.
 */
explain analyze select c1, c2 from oldt where c1<10000;
explain analyze select c1, c2 from newt where c1<10000;

/*
 * Select all columns. Query on key column.
 * 1st uses IndexScan to get c3, c4 from heap.
 * 2nd uses IndexOnlyScan and returns all attributes directly from index.
 */
explain analyze select * from oldt where c1<10000;
explain analyze select * from newt where c1<10000;

/*
 * Select all columns. Query on both key and included columns.
 * 1st uses IndexScan to recheck qual on c3 and get c3,c4.
 * 2nd uses IndexOnlyScan. It's faster.
 */
explain analyze select * from oldt where c1<10000 and c3<20;
explain analyze select * from newt where c1<10000 and c3<20;

/*
 * Select only key columns. Query on both key and included columns.
 * 1st uses IndexScan to recheck qual on c3.
 * 2nd uses IndexOnlyScan. It's faster.
 */
explain analyze select c1, c2 from oldt where c1<10000 and c3<20;
explain analyze select c1, c2 from newt where c1<10000 and c3<20;


/*
 * We want to use IndexOnlyScan on oldt when possible.
 * Create a covering index on oldt.
 */
create index oldcoveringidx ON oldt using btree (c1, c2, c3, c4);
vacuum analyze;

/*
 * Select all columns. Query on both key and included columns.
 * 1st uses IndexOnlyScan.
 * 2nd uses IndexOnlyScan.
 */
explain analyze select * from oldt where c1<10000 and c3<20;
explain analyze select * from newt where c1<10000 and c3<20;

/*
 * Select only key columns. Query on both key and included columns.
 * 1st uses IndexOnlyScan. (But we have to maitain one more index now.)
 * 2nd uses IndexOnlyScan.
 */
explain analyze select c1, c2 from oldt where c1<10000 and c3<20;
explain analyze select c1, c2 from newt where c1<10000 and c3<20;

/*
 * We can see that indexes on newt requires less space than on oldt.
 */
\di+

/*
 * Next point is that maitenance of indexes is cost!
 * Newt insertion is about 50% faster than oldt.s
 */
insert into oldt (select x, 2*x, 3*x, 4 from generate_series(10000001,20000000) as x);
insert into newt (select x, 2*x, 3*x, 4 from generate_series(10000001,20000000) as x);
