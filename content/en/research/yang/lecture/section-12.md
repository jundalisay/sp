---
heading: Section 12
title: "What are Instantons?"
description: "The algebra g has many different representations R"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 24
---


## 2.3 Instantons

The theta angle is an important parameter in Yang-Mills, changing the spectrum and correlation functions of the theory. 

This is in contrast to electromagnetism where ✓ only plays a role in the presence of boundaries (such as topological insulators) or magnetic monopoles.

How do we see this from the path integral?

The theta term is a total derivative

<!-- Z
Z
✓
✓
4
? μ⌫
S✓ =
d x tr F Fμ⌫ = 2 d4 x @μ K μ
2
16⇡
8⇡
where
μ
K =✏
μ⌫⇢
tr
✓
2i
A⌫ A⇢ A
3
A⌫ @⇢ A
◆ -->


This means that if a field configuration is to have a non-vanishing value of S✓ , then it must have something interesting going on at infinity.

We then Wick-rotate so that we work in Euclidean spacetime R4. We will explain the physical significance of this in Section 2.3.2. 

Configurations that have finite action SY M must asymptote to pure gauge:

<!-- Aμ ! i⌦@μ ⌦ 1
as x ! 1
– 51 –
(2.45)with ⌦ 2 G.  -->

This means that finite action, Euclidean field configurations involve a map: 
<!-- ⌦(x) : S31 7! G
 -->
But we have met such maps before: they are characterised by the homotopy group
<!-- ⇧3 (G) = Z.  -->

Plugging this asymptotic ansatz (2.45) into the action 

<!-- S✓ , we have
S✓ = ✓⌫
(2.46) -->

where ⌫ 2 Z is an integer that tells us the number of times that ⌦(x) winds around the asymptotic S31 ,

<!-- Z
1
⌫(⌦) =
d3 S ✏ijk tr (⌦@i ⌦ 1 )(⌦@j ⌦ 1 )(⌦@k ⌦ 1 )
(2.47)
24⇡ 2 S31 -->

This is the same winding number that we met previously in (2.36).

This discussion is mathematically identical to the classification of non-trivial gauge transformations in Section 2.2.2. However, the physical setting is somewhat different.

Here we are talking about maps from the boundary of (Euclidean) spacetime S31, while in Section 2.2.2 we were talking about maps from a spatial slice, R3 , suitably compactified to become S3.  

We will see the relationship between these in Section 2.3.2.


## 2.3.1 The Self-Dual Yang-Mills Equations

Among the class of field configurations with non-vanishing winding ⌫ there are some that are special: these solve the classical equations of motion,

<!-- Dμ F μ⌫ = 0 -->
(2.48)

There is a cute way of finding solutions to this equation. 

The Yang-Mills action is

<!-- Z
1
SY M = 2 d4 x tr Fμ⌫ F μ⌫
2g -->

Note that in Euclidean space, the action comes with a + sign. 

This is to be contrasted with the Minkowski space action (2.8) which comes with a minus sign. We can write this as

<!-- Z
Z
1
1
8⇡ 2
2
4
?
SY M = 2 d x tr (Fμ⌫ ⌥ Fμ⌫ ) ± 2 d4 x tr Fμ⌫ ? F μ⌫
|⌫|
4g
2g
g2 -->

where, in the last line, we’ve used the result (2.46). We learn that in the sector with winding ⌫, the Yang-Mills action is bounded by 8⇡ 2 |⌫|/g 2 . 

The action is minimised when the bound is saturated. This occurs when

<!-- Fμ⌫ = ±? Fμ⌫ -->
(2.49)

These are the (anti) self-dual Yang-Mills equations.

The argument above shows that solutions to these first order equations necessarily minimise the action is a given topological sector and so must solve the equations of motion (2.48). 

In fact, it’s straightforward to see that this is the case since it follows immediately from the Bianchi identity Dμ ? F μ⌫ = 0. 

The kind of “completing the square” trick that we used above, where we bound the action by a topological invariant, is known as the Bogomolnyi bound. We’ll
see it a number of times in these lectures.

Instantons are solutions to the (anti) self-dual Yang-Mills equations (2.49).

This is because the action density is localised at both a point in space and at an instant in (admittedly, Euclidean) time.

They contribute to the path integral with a characteristic factor:
<!-- 2
2
e Sinstanton = e 8⇡ |⌫|/g ei✓⌫
(2.50) -->

Note that the Yang-Mills contribution is real because we’ve Wick-rotated to Euclidean space. However, the contribution from the theta term remains complex even after Wick rotation. 

This is typical behaviour for such topological terms that sit in the action with epsilon symbols.

