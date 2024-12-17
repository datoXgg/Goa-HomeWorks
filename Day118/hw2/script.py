def count_capital_letters(file_path):
    count = 0
    with open(file_path, 'r') as file:
        while True:
            char = file.read(1)
            if not char:
                break
            if char.isupper():
                count += 1
    return count

def calculate_average(file_path):
    total_sum = 0
    count = 0
    with open(file_path, 'r') as file:
        for line in file:
            try:
                num = float(line.strip())
                total_sum += num
                count += 1
            except ValueError:
                continue 
    if count > 0:
        return total_sum / count
    else:
        return 0

def are_distinct(a, b, c):
    if a == b:
        return False
    if a == c:
        return False
    if b == c:
        return False
    return True

def find_largest(a, b, c):
    if a > b:
        if a > c:
            return a
        else:
            return c
    else:
        if b > c:
            return b
        else:
            return c

def find_second_largest(arr):
    largest = second_largest = float('-inf')
    
    for num in arr:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest:
            second_largest = num
    
    return second_largest