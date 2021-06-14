#Author: FS
#Ciclo I de programacion -- MinTic -- 2021


def comandos(letraC1, letraC2, letraP):
    i: int
    if (letraP.isalpha() and letraC1.isalpha() and letraC2.isalpha()):
        #x = letraP[3:(longitud):4]
        for element in letraP:
            if element in letraC1:
                i = 1
                print(i, end="")
            elif element in letraC2:
                i = 2
                print(i, end="")
            else:
                i = 0
                print(i, end="")
        return i
    else:
        return "Los datos ingresados no son validos"


lCaseta1 = input()
lCaseta2 = input()
lPlacas = input()
print(comandos(lCaseta1, lCaseta2, lPlacas))
