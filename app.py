print(r'''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\ ` . "-._ /_______________|_______
|                   | |o ;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/_____ /
*******************************************************************************
''')
print(r'''el juan es mero  gay jaja solo millos''')
print("Welcome to Treasure Island.")
print("Your mission is to find the treasure.")
choice1= input('you\' are at a crossroad where do you want to go? Type"Left" or "Right".').lower()


if choice1 == "left":
    choice2 = input('you\'ve come to a lake.'
                    ' There is an island in the middle of the lake.'
                    ' Type "wait" to wait for a boat. '
                    ' Type "swim" to swim.').lower()
    if choice2 == "wait":
       choice3 = input("you arrive at the island unharmed and sick."
                       " there is a house with 3 doors. One blue, One red and one yellow."
                       " Which colour do you choose? ").lower()
       if choice3 == "blue":
           print("It's a room full of more doors. Game Over")
       elif choice3 == "red":
           print("A room full of fire. Game Over.")
       elif choice3 == "yellow":
           print("You found the treasure. You win!.")

    else:
        print("you got attacked by an angry juice. game over.")


else:
    print("You fell into the Abyss. Game Over.")