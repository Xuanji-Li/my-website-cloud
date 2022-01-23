---
title: MVC principle
---

## mvc pattern
1.
How to design the structure of a program is a specialised discipline called "architectural pattern", which belongs to the methodology of programming.
The MVC pattern is one of the architectural patterns and it has been particularly inspiring to me. I think it is applicable not only to developing software but also to a wide range of other design and organisational tasks.
Here are some of my personal understandings of the MVC pattern, not necessarily correct, but mainly used to organize my thoughts.

2.
MVC is an acronym for three words, they are Model, View and Controller.
This model believes that programs, whether simple or complex, can be structurally divided into three layers.
1) The top layer is the View layer, which is directly oriented to the end user. It is the interface provided to the user and is the shell of the program.
2) The bottom layer is the core "data layer" (Model), that is, the data or information that the program needs to manipulate.
(3) The middle layer is the Controller, which is responsible for selecting the data in the Data Layer according to the user's input from the View Layer, and then manipulating it accordingly to produce the final result.
These three layers are closely linked but independent of each other, with changes within each layer not affecting the others. Each layer provides an external Interface for the layer above to call. In this way, the software can be modularised so that changes to appearance or data do not require changes to other layers, greatly facilitating maintenance and upgrades.

3.
I use the Windows calculator applet as an example to explain the MVC pattern, although it is not necessarily written using this pattern.
In this calculator application, the external buttons and the top display bar are the "view layer", the numbers that need to be calculated are the "data layer", and the internal steps that perform the addition, subtraction, multiplication and division are the "control layer". Each layer performs a different function and the structure of the program is very clear.
If we expand our imagination a little, we can see that many programs are essentially in this mode: they provide a set of external triggers (in this case, buttons), then perform some internal operations and finally return the result. Thus, the MVC pattern is very widely used.

4.
In my opinion, not only can the MVC pattern be used for writing programs, it can also be used for household appliances.
Take the example of a household microwave oven, which can be understood as a three-tier structure as well. In the simplest case, the microwave oven is operated by two dials, one controlling the temperature and the other the time. These two dials are the 'view' layer, while the microwave generator inside is the 'data' layer (Model), where 'data' needs to be understood as 'core functionality'. The control layer is used to translate the information entered by the user via the dial into an operation of the microwave generator.
If each layer is independent, then a new, trendy casing on the outside of the microwave oven, or a more powerful microwave generator on the inside, can be implemented without changing the other layers. This is the advantage of the MVC model.

5.
Further, if the MVC pattern is interpreted as a three-tier structure of "appearance", "mechanism" and "functionality/data", then many human organisations can be structured in the MVC pattern.
A shopping mall, for example, can be divided into three parts. One part is the warehouse, responsible for providing goods, which is the 'functional layer' (or 'data layer'); the other part is the retail shop, responsible for selling goods, which is its 'appearance layer'; and in between is the 'mechanism layer', which includes all the mechanisms for interaction between the counter and the warehouse.
With this distinction, the structure of the mall becomes very clear and can be optimised for the different layers to improve efficiency.

