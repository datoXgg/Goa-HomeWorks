def roll_dice():
    result = numbers[0]
    numbers.append(numbers.pop(0))
    return result

def main():
    player_score = 0
    computer_score = 0

    while player_score < 6 and computer_score < 6:
        user_input = input("ჩაწერე 'roll' ")

        if user_input == "roll":
            player_roll = roll_dice()
            print("შენ ამოგივიდა: " + str(player_roll))
            player_score += player_roll
            print("შენი ქულაა: " + str(player_score) + "\n")

            if player_score >= 6:
                print("შენ მოიგე!")
                break

            computer_roll = roll_dice()
            print("კომპიუტერს ამოუვიდა: " + str(computer_roll))
            computer_score += computer_roll
            print("კომპიუტერის ქულაა: " + str(computer_score) + "\n")

            if computer_score >= 6:
                print("შენ წააგე!")
                break 
        else:
            print("ჩაწერე 'roll' ")

numbers = [1, 2, 3, 4, 5, 6]
main()
