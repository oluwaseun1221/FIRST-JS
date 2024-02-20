#include <iostream>

// Function to calculate factorial recursively
unsigned long long factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    int num;
    std::cout << "Enter a positive integer: ";
    std::cin >> num;

    if (num < 0)
        std::cout << "Factorial is not defined for negative numbers.";
    else
        std::cout << "Factorial of " << num << " is: " << factorial(num);

    return 0;
}
