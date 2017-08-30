using System;
using Xunit;
using myLib;

namespace myTests
{
    public class MathHelper_MaxShould
    {
        private readonly MathHelper _mathHelper;

        public MathHelper_MaxShould()
        {
            _mathHelper = new MathHelper();
        }

        [Theory]
        [InlineDataAttribute(89,89,89)]
        [InlineDataAttribute(-40789,-40789,-40789)]
        [InlineDataAttribute(275,275,275)]
        [InlineDataAttribute(1,1,1)]
        [InlineDataAttribute(9999,9999,9999)]
        public void ReturnValueWhenValueOfOperandsSame(int value1, int value2, int expectedResult)
        {
            var actualResult = _mathHelper.Max(value1, value2);
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineDataAttribute(89,88,89)]
        [InlineDataAttribute(57,256,256)]
        [InlineDataAttribute(-9876,-11,-11)]
        public void ReturnMaxOfTwoDifferentValues(int value1, int value2, int expectedResult)
        {
            var actualResult = _mathHelper.Max(value1, value2);
            Assert.Equal(expectedResult, actualResult);
        }

        [Fact]
        /// <summary>
        /// Test the fact that Max is commutative - returns the same
        /// result independent of the order of the operands.
        /// </summary>
        public void ReturnSameResultIndependentOfOrder()
        {
            // Arrange
            int x = 9;
            int y = 87;

            // Act
            var result1 = _mathHelper.Max(x,y);
            var result2 = _mathHelper.Max(y,x);

            // Assert
            Assert.Equal(result1, result2);
        }
    }
}
