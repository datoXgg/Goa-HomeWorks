family = ["tamuna", "rezi", "dato",]
age = [46, 10, 15]
after_ten_years = [56, 20, 25]
family_names = "My moms name is: {}, My brothers name is: {}, My name is: {}.".format(family[0],family[1],family[2])
print(family_names)
family_ages_and_names ="My moms name is: {}, her age is: {}, My brothers name is: {}, his age is: {}, My name is: {}, my age is: {}.".format(family[0],age[0],family[1],age[1],family[2],age[2])
print(family_ages_and_names)
family_ages_and_names_10_years = "My moms name is: {}, her age is: {}, My brothers name is: {}, his age is: {}, My name is: {}, my age is: {}.".format(family[0],after_ten_years[0],family[1],after_ten_years[1],family[2],after_ten_years[2])
print(family_ages_and_names_10_years)



x = [2, 4, 6, 2, 4, 7, 2, 9] 
for i in range(2):
    x.remove(4)
print(x)