using System;

namespace myLib
{
    public class MathHelper
    {
        public int Max(int x, int y)
        {
            if(x == y)
            {
                return x;
            }
            else if(x > y)
            {
                return x;
            }
            else
            {
                return y;
            }
        }
    }
}
