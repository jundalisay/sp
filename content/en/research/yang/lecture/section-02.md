---
heading: Section 2
title: "The Action Principle"
description: "The algebra g has many different representations R"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 4
---


The algebra g has many different representations R. For each such representation, we have generators T a (R) which we can can think of as square matrices of dimension dim R. Dressed with all their indices, they take the form

<!-- T a (R)i j
i, j = 1, . . . , dim R ; a = 1 . . . , dim G -->

For each of these representations, we can package the gauge fields into a Lie algebra valued object Aaμ T a (R)i j We can then couple matter in the representation R by generalising the covariant derivative from the fundamental representation to

<!-- Dμ
i
= @μ
i
iAaμ T a (R)i j
j
i, j = 1, . . . , dim R -->

(2.6)

Each of these representations offers a different ways of packaging the fields Aaμ into Lie-algebra valued objects Aμ . As we mentioned above, we will mostly focus on G = SU (N ): in this case, we usually take T a in the fundamental representation, in which case Aμ is simply an N ⇥ N Hermitian matrix.

Aside from the fundamental, there is one other representation that will frequently arise: this is the adjoint, for which dim R = dim G. We could think of these fields as forming a vector a , with a = 1, . . . , dim G, and then use the form of the covariant derivative (2.6). 

In fact, it turns out to be more useful to package adjoint valued matter fields into a Lie-algebra valued object, = a T a . 

In this language the covariant derivative can be written as 

<!-- Dμ = @ μ
i[Aμ , ]

(2.7) -->

The field strength can be constructed from the commutator of covariant derivatives.

It’s not hard to check that

<!-- [Dμ , D⌫ ] =
The same kind of calculation shows that if
[Dμ , D⌫ ] =
iFμ⌫
is in the adjoint representation,
i[Fμ⌫ , ] -->

where the right-hand-side is to be thought of as the action of Fμ⌫ on fields in the adjoint representation. More generally, we write [Dμ , D⌫ ] = iFμ⌫ , with the understanding that the right-hand-side acts on fields according to their representation.

## 2.1.1 The Action

The dynamics of Yang-Mills is determined by an action principle. 

We work in natural units, with ~ = c = 1 and take the action 

<!-- SYM = d4 x tr F μ⌫ Fμ⌫
(2.8) -->

where g 2 is the Yang-Mills coupling. (It’s often called the “coupling constant” but, as we will see in Section 2.4, there is nothing constant about it so I will try to refrain from this language).

If we compare to the Maxwell action (1.10), we see that there is a factor of 1/2 outside the action, rather than a factor of 1/4; this is accounted for by the further factor of 1/2 that appears in the normalisation of the trace (2.2). 

There is also the extra factor of 1/g 2 that we will explain below. 

The classical equations of motion are derived by minimizing the action with respect to each gauge field Aaμ . It is a simple exercise to check that they are given by

<!-- Dμ F μ⌫ = 0
(2.9) -->

where, because Fμ⌫ is Lie-algebra valued, the definition (2.7) of the covariant derivative is the appropriate one.

There is also a Bianchi identity that follows from the definition of Fμ⌫ in terms of the gauge field. This is best expressed by first introducing the dual field strength

<!-- ? μ⌫
F
1
= ✏μ⌫⇢ F⇢
2 -->

and noting that this obeys the identity

<!-- Dμ ? F μ⌫ = 0
(2.10) -->

The equations (2.9) and (2.10) are the non-Abelian generalisations of the Maxwell equations. 

They differ only in commutator terms, both those inside Dμ and those inside Fμ⌫ . 

Even in the classical theory, this is a big difference as the resulting equations are non-linear. This means that the Yang-Mills fields interact with themselves.

Note that we need to introduce the gauge potentials Aμ in order to write down the Yang-Mills equations of motion. 

This is in contrast to Maxwell theory where the Maxwell equations can be expressed purely in terms of E and B and we introduce gauge fields, at least classically, merely as a device to solve them.


## A Rescaling

Usually in quantum field theory, the coupling constants multiply the interaction terms in the Lagrangian. These are terms which are higher order than quadratic, leading to non-linear terms in the equations of motion.

However, in the Yang-Mills action, all terms appear with fixed coefficients determined by the definition of the field strength (2.4). 

Instead, we’ve chosen to write the (inverse) coupling as multiplying the entire action. This difference can be accounted for by a trivial rescaling. 

We define

<!-- 1
Ãμ = Aμ
g
and F̃μ⌫ = @μ Ã⌫
@⌫ Ãμ
ig[Ãμ , Ã⌫ ] -->

Then, in terms of this rescaled field, the Yang-Mills action is

<!-- Z
Z
1
1
4
μ⌫
SYM =
d x tr F Fμ⌫ =
d4 x tr F̃ μ⌫ F̃μ⌫
2g 2
2 -->

In the second version of the action, the coupling constant is buried inside the definition of the field strength, where it multiplies the non-linear terms in the equation of motion as expected.

We will use the normalisation (2.8) next.

This is the more useful choice in the quantum theory, where SYM sits exponentiated in the partition function. One way to see this is to note that g 2 sits in the same place as ~ in the partition function. 

This already suggests that g 2 ! 0 will be a classical limit. 

Heuristically, for g 2 small, one pays a large price for field configurations that do not minimize the action; in this way, the path integral is dominated by the classical configurations.

In contrast, when g 2 ! 1, the Yang-Mills action disappears completely. This is the strong coupling regime, where all field configurations are unsuppressed and contribute equally to the path integral.

Based on this, you might think that we can just set g 2 to be small and a classical analysis of the equations of motion (2.9) and (2.10) will be a good starting point to
understand the quantum theory. 

As we will see in Section 2.4, it turns out that this is not an option; instead, the theory is much more subtle and interesting.

