def convert_F_to_celsius(F):
    celsius = (F - 32) * 5 / 9
    return celsius

lower = 0
upper = 300
step = 20

print("F to Celsius Conversion Table")
print("F    Celsius")

F = lower
while F <= upper:
    celsius = convert_F_to_celsius(F)
    print(F, "        ", celsius)
    F = F + step
