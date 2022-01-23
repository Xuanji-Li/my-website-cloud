---
title: C#10 + .net core + VS2022
---

## .net 
    1.desktop app
    2.web
    3.mobile app
    4.VR mobile game

## CS & BS

    CS : client and server
    have to install an application on
    etc: vs code

    BS : browser and server
    only need a browser

## generic in C# 
    if i dont want to define the type of the element
    suppost there is a method with two parameters
    if i pass an int, display int
    if its string then display string
    basically use one method to handle different input value type

## partical class     

    suppose one class has muptiple methods
```c#
class PartialTest
    {
    string Str_FieldTest;
    int Int_FieldTest;
    public void DoTest()
    {
    Debug.Print("Test");
    }
    }
```
can be written like :

```c#
partial class PartialTest
    {
    string Str_FieldTest;
    int Int_FieldTest;
    }
```
one file and in another:
```c#
    partial class PartialTest
    {
    public void DoTest()
    {
    Debug.Print("Test");
    }
    }
```

1. the use of the partial keyword indicates that other parts of the class, structure or interface can be defined within the namespace
2. the partial keyword must be used for all parts
3. each part must have the same accessibility, e.g. public, private, etc.
4. if any part is declared as abstract, the whole type is considered abstract
5. if any part is declared as sealed, the whole type is considered sealed
6. if any part is declared to inherit from a base class, the whole type will inherit from that class
7. each part may specify a different base interface and the final type will implement all the interfaces listed in all the divisional declarations
8. any class, structure or interface member declared in a divisional definition is available to all other divisions
