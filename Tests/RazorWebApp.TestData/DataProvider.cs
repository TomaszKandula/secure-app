using System;
using System.IO;
using System.Linq;
using System.Text;

namespace RazorWebApp.TestData
{   
    public static class DataProvider
    {
        private static readonly Random FRandom = new Random();

        public static int GetRandomInt(int AMin = 0, int AMax = 12)
            => FRandom.Next(AMin, AMax + 1);
      
        public static string GetRandomEmail(int ALength = 12, string ADomain = "gmail.com")
            => $"{GetRandomString(ALength)}@{ADomain}";

        public static decimal GetRandomDecimal(int AMin = 0, int AMax = 9999)
            => FRandom.Next(AMin, AMax);

        public static string GetRandomString(int ALength = 12, string APrefix = "")
        {
            if (ALength == 0) 
                return string.Empty;

            const string CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            var LString = new string(Enumerable.Repeat(CHARS, ALength)
                .Select(AString => AString[FRandom.Next(AString.Length)])
                .ToArray());

            if (!string.IsNullOrEmpty(APrefix) || !string.IsNullOrWhiteSpace(APrefix)) 
                return APrefix + LString;

            return LString;
        }

        public static MemoryStream GetRandomStreamData(int ASizeInKb = 12)
            => new MemoryStream(GetRandomByteArray(ASizeInKb));

        public static DateTime GetRandomDate(DateTime? AMin = null, DateTime? AMax = null, int ADefaultYear = 2020)
        {
            AMin ??= new DateTime(ADefaultYear, 1, 1);
            AMax ??= new DateTime(ADefaultYear, 12, 31);

            var LDayRange = (AMax - AMin).Value.Days;
            return AMin.Value.AddDays(FRandom.Next(0, LDayRange));
        }

        public static T GetRandomEnum<T>()
        {
            var LRandom = new Random();
            var LValues = Enum.GetValues(typeof(T));
            return (T)LValues.GetValue(LRandom.Next(LValues.Length));
        }

        public static string Base64Encode(string APlainText)
        {
            var LPlainTextBytes = Encoding.UTF8.GetBytes(APlainText);
            return Convert.ToBase64String(LPlainTextBytes);
        }

        public static string Base64Decode(string ABase64EncodedData)
        {
            var LBase64EncodedBytes = Convert.FromBase64String(ABase64EncodedData);
            return Encoding.UTF8.GetString(LBase64EncodedBytes);
        }

        private static byte[] GetRandomByteArray(int ASizeInKb = 12)
        {
            var LByteBuffer = new byte[ASizeInKb * 1024];
            FRandom.NextBytes(LByteBuffer);
            return LByteBuffer;
        }
    }
}