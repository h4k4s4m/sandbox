from module.module import timesTwo
""" this is a string literal"""
def main():
    """this is considered a docstring"""
    x = input("Enter a number to multiply by 2 \n")
    y = timesTwo(x)
    print(f"The answer is {y.answer()}")




if __name__ == "__main__":
    main()