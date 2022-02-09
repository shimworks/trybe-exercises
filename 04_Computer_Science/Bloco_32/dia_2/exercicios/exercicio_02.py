import random

counter = 0

choices = ["word1", "word2", "word3"]
word = random.choice(choices)
scrambled_word = "".join(random.sample(word, len(word)))

answer = input(f"qual é essa palavra? {scrambled_word}\n")

if answer == word:
    print('Acerto miseravi')
elif counter < 3:
    counter += 1
    print(counter)
    answer = input("tente novamente\n")
else:
    print("errow")
