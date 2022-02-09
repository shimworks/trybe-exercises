NAME = input("Seu nome cara:")
counter = len(NAME)

while counter > 0:
    for letter in NAME:
        print(NAME)
        NAME = NAME[:-1]
        counter -= 1
