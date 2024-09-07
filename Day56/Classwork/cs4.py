def fake_bin(x):
    result = ""
    for char in x:
        digit = int(char)
        if digit < 5:
            result += '0'
        else:
            result += '1'
    return result