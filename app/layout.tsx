import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

function isPalindrome(x) {
  // store the original number
  let num = x;

  // if number is negative return false
  if (x < 0) return false;

  let ans = 0;
  while (num > 0) {
    const last_digit = num % 10;
    ans = ans * 10 + last_digit;
    num = Math.floor(num/ 10);
  }

  return x === ans;
}