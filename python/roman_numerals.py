def to_roman(num):
    
    finalString = ""

    roman_numerals = {

        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1,
    }

    while num > 0:
        for prop in roman_numerals:
            if roman_numerals[prop] > num: 
                continue; # Skips iterations where calculation is not needed
            finalString += prop
            num -= roman_numerals[prop]
            break
    
    print(finalString)
    return finalString

    
to_roman(9)


