import random
import string
import sys
#function for ccreate the password 
def password( Password_length):
    length = int(Password_length )
    if length < 12 :
        return "to short, make stronger! like more than 12 "
        sys.exit()
    Password_character = string.digits + string.ascii_letters + string.punctuation
    Password_character = list(Password_character)
    password1 = random.choices(Password_character, k = length)
    password1 = ''.join(password1)
    return password1


