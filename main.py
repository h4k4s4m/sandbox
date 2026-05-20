def fizzbuzz(number: int) -> None:
    """Basic FizzBuzz

    Args:
        number (int): number coming from loop or single number
    """
    if number % 15 == 0:
        print("FIZZBUZZ")
    elif number % 5 == 0:
        print("BUZZ")
    elif number % 3 == 0:
        print("FIZZ")
    else:
        print(number)


for x in range(1, 101):
    fizzbuzz(x)
