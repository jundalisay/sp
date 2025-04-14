---
heading: Section 8
title: "Building the Hilbert Space"
description: "To construct the physical Hilbert space of Maxwell theory, we set ✓ = 0"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 16
---


## Building the Hilbert Space

To construct the physical Hilbert space of Maxwell theory, we set ✓ = 0. 

For this Abelian theory, Gauss’ law (2.27) is linear in A and it is equivalent to r · A = 0. 

This makes it simple to solve: the constraint kills the longitudinal photon mode, leaving us with two, physical transverse modes. 

We can then build the Hilbert space describing just these physical degrees of freedom.

This was the story we learned in our first course on Quantum Field Theory.

In contrast, things aren’t so simple in Yang-Mills theory. The Gauss’ law (2.27) is non-linear and it’s not so straightforward to solve the constraint to isolate only the physical degrees of freedom. 

We construct an auxiliary Hilbert space built from all spatial gauge fields: we call these states |A(x, t)i.

The physical Hilbert space is then defined as those states |physi which obey

<!-- Di Ei |physi = 0
(2.29) -->

Note that we do not set Di Ei = 0 as an operator equation; this would not be compatible with the commutation relations of the theory. Instead, we use it to define the physical states.

There is an alternative way to think about the constraint (2.29). After we’ve picked A0 = 0 gauge, we still have further time-independent gauge transformations of the form

A ! ⌦A⌦ 1 + i⌦r⌦ 1

Among these are global gauge transformations which, in the limit x ! 1, asymptote to ⌦ ! constant 6= 1. These are sometimes referred to as large gauge transformations.

They should be thought of as global, physical symmetries rather than redundancies.

A similar interpretation holds in Maxwell theory where the corresponding conserved quantity is electric charge. 

In the present case, we have a conserved charge for each
generator of the gauge group. 

The form of the charge follows from Noether’s theorem and, for the gauge transformation ⌦ = ei! , is given by


<!-- Z
d3 x tr (⇡ · A)
✓
◆
Z
✓g 2
1
3
= 2 d x tr Ei + 2 Bi Di !
g
8⇡
Z
1
=
d3 x tr (Di Ei !)
g2
Q(!) = -->


(2.30)

where we’ve used the fact that Di Bi = 0. This is telling us that the Gauss’ law Ga = (Di Ei )a plays the role of the generator of the gauge symmetry. The constraint (2.29) is the statement that we are sitting in the gauge singlet sector of the Hilbert
space where, for all !, Q(!) = 0.

## 2.2.2 The Wavefunction and the Chern-Simons Functional

It’s rare in quantum field theory that we need to resort to the old-fashioned Schrödinger representation of the wavefunction. 

But we will find it useful here. We will think of the states in the auxiliary Hilbert space as wavefunctions of the form (A). (Strictly speaking, these are wavefunctionals because the argument A(x) is itself a function.) 

In this language, the canonical momentum ⇡ i is, as usual in quantum mechanics, ⇡ i = i / Ai . The Gauss’ law constraint then becomes 

<!-- Di
✓
i
◆=0
◆2+
Ai -->


(2.31)

Meanwhile, the Schrödinger equation is


<!-- H
2
= g tr
✓
i
A
✓
B
8⇡ 2
1
tr B2
g2
=E -->

(2.32)

This is now in a form that should be vaguely familiar from our first course in quantum mechanics, albeit with an infinite number of degrees of freedom. 

All we have to do is solve these equations. That, you may not be surprised to hear, is easier said than done.

We can, however, try to see the effect of the ✓ term. 

Suppose that we find a physical, energy eigenstate — call it 0 (A) — that solves both (2.31), as well as the Schrödinger equation (2.32) with ✓ = 0. 

That is,


<!-- 2
g 2 tr
0
A
+
1
tr B2
g2
0 = E
(2.33)
0 -->


Now consider the following state

(A) = ei✓ W [A]
0 (A)

(2.34)

where W (A) is given by

<!-- 
1
W (A) = 2
8⇡
Z
3
dx✏
ijk
✓
2i
tr Fij Ak + Ai Aj Ak
3
◆
 -->
(2.35)

This is known as the Chern-Simons functional. It has a number of beautiful and subtle properties, some of which we will see below, some of which we will explore in Section 8. 

It also plays an important role in the theory of the Quantum Hall Effect. Note that we’ve already seen the expression (2.35) before: when we wrote the ✓ term as a total derivative (2.24), the temporal component was 

<!-- K 0 = 4⇡ 2 W . -->

For now, the key property of W (A) that we will need is


<!-- W (A)
1
1
= 2 ✏ijk Fjk = 2 Bi
Ai
8⇡
4⇡ -->

which gives us the following relation,

<!-- i
(A)
=
Ai
iei✓W [A]
0 (A)
Ai
+
✓
Bi (A)
4⇡ 2 -->


This ensures that satisfies the Gauss law constraint (2.31). (To see this, you need to convince yourself that the Di in (2.31) acts only on 0 / Ai in the first term above and on Bi in the second and then remember that Di Bi = 0 by the Bianchi identity.)

Moreover, if 0 obeys the Schrödinger equation (2.33), then will obey the Schrödinger equation (2.32) with general ✓.

The above would seem to show that if we can construct a physical state 0 with energy E when ✓ = 0 then we can dress this with the Chern-Simons functional ei✓W (A)
to construct a state which has the same energy E when ✓ 6= 0. 

In other words, the physical spectrum of the theory appears to be independent of ✓. 

In fact, this conclusion is wrong! 

The spectrum does depend on ✓. To understand the reason behind this, we have to look more closely at the Chern-Simons functional (2.35).
