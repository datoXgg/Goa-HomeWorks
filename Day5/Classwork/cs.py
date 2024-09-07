limit = 18
age = int(input("sheiyvane asaki: "))
height = int(input("sheiyvane simagle: "))

if age >= limit and height >= 180:
  print("magalic da zrdasrulic xar")
elif age >= limit and height < 180:
  print("zrdasruli xar tumca ar xar magali")
elif age < limit and height >= 180:
  print("magali xar magram ar xar zrdasruli")
elif age < limit and height < 180:
  print("vercerti kriteriumi ver daakmayofile!")
else:
  pass
