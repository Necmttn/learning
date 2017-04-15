
print("which list of  numbers you wanna check for minmax")
print("Write the numbers   by seperating with ',' Comma")
n = input().split(",")
n.sort()

print("min value", n[0])
print("max value", n[len(n)-1])
