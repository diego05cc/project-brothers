print(r'''
***************************
          |                   |                  |                     |
 ___|_____.="";=._____|_______|__
|                   |  ,-"_,=""     `"=.|                  |
|______|"=._o`"-.        `"=._____|______
          |                "=._o"=._      `"=.                     |
 ___|_______:=.o "=..".-="'"=.______|__
|                   |    _.--" , ; `"=._o." ,-"""-. ".   |
|______|."  ,. .` ` `` ,  `"-."-._   ". '_|______
          |           |o`"=.` , "` `; .". ,  "-."-._; ;              |
 ___|____| ;-.o"=.; ." ` '`."\ ` . "-._ /_____|___
|                   | |o ;    "-.o"=.``  '` " ,_.--o;   |
|______|| ;     (#) -.o `"=..--"_o.-; ;_|______
_/__/__/_|o;.    "      `".o|o_.--"    ;o;_/__/__/_
/__/__/__/"=._o--.        ; | ;        ; ;/__/__/__/_
_/__/__/__/"=._o--.   ;o|o;     .;o;_/__/__/_
/__/__/__/__/_"=._o.; | ;.--"o.--"/__/__/__/_
_/__/__/__/__/_"=.o|o.--""_/__/__/__/__
/__/__/__/__/__/__/__/__/__/__/___ /
***************************
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