---
heading: Section 5
title: "Quantising the Colour Degree of Freedom"
description: "What classical system gives rise to a finite dimensional quantum Hilbert space?"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 10
---


## Quantising the Colour Degree of Freedom

Above we viewed the colour degree of freedom as a vector w. 

This is a very classical perspective. 

It is better to think of each quark as carrying a finite dimensional Hilbert space Hquark , of dimension dim Hquark = dim R.

Here we will explain how to accomplish this. 

This will provide yet another perspective on the Wilson loop. What follows also offers an opportunity to explain a basic aspect of quantum mechanics which is often overlooked when we first meet the subject.

What classical system gives rise to a finite dimensional quantum Hilbert space? 

Even the simplest classical systems that we meet as undergraduates, such as the harmonic oscillator, give rise to an infinite dimensional Hilbert space.

Instead, the much simpler finite dimensional systems, such as the spin of the electron, are typically introduced as having no classical analog. Here we’ll see that there is an underlying classical system and that it’s rather simple.

We’ll stick with a G = SU (N ) gauge theory. We consider a single test particle and attach to it a complex vector w, but this time we will insist that w has dimension N.

We will restrict its length to be w† w = (2.16)

The action which reproduces the equation of motion (2.13) is

<!-- Z
dw
Sw = d⌧ iw†
+ (w† w ) + w† A(x(⌧ ))w
dt

(2.17) -->

where


is a Lagrange multiplier to impose the constraint (2.16), and where A = μ Aμ dx /d⌧ is to be thought of as a fixed background gauge field Aμ (x) which varies in
time in some fixed way as the particle moves along the path xμ (⌧ ).

Perhaps surprisingly, the action (2.17) has a U (1) worldline gauge symmetry. This acts as

<!-- w ! eiff w
and
!
+ ff ̇
 -->

for any ff(⌧ ). Physically, this gauge symmetry means that we should identify vectors
which differ only by a phase: w ⇠ eiff w . Since we already have the constraint (2.16),

this means that the vectors parameterise the projective space S2N 1 /U (1) ⇠ = CPN 1 .

Importantly, our action is first order in time derivatives rather than second order.

This means that the momentum conjugate to w is iw† and, correspondingly, CPN 1 is the phase space of the system rather than the configuration space. 

This, it turns out, is the key to getting a finite dimensional Hilbert space: you should quantise a
system with a finite volume phase space.

This fits nicely with the old-fashioned Bohr-Sommerfeld view of quantisation in which one takes the phase space and assigns a quantum state to each region of extent ⇠ ~. A finite volume then gives a finite number of states.

We can see this in a more straightforward way doing canonical quantisation. 

The unconstrained variables wi obey the commutation relations

<!-- 
[wi , wj† ] =
ij
```

(2.18) -->

But we recognise these as the commutation relations of creation and annihilation operators. We define a “ground state” |0i such that wi |0i = 0 for all i = 1, . . . , N . A
general state in the Hilbert space then takes the form
|i1 , . . . , in i = wi†1 . . . wi†n |0i

(2.19)

However, we also need to take into account the constraint (2.16). 

Note that this now arises as the equation of motion for the worldine gauge field. 

As such, it is analogous to Gauss’ law when quantising Maxwell theory and we should impose it as a constraint that defines the physical Hilbert space. 

There is an ordering ambiguity in defining this constraint in the quantum theory: we chose to work with the normal ordered constraint

<!-- (wi† wi)|physi = 0 -->

This tells us that the physical spectrum of the theory has precisely excitations. In this way, we restrict from the infinite dimensional Hilbert space (2.19) to a finite dimensional subspace. 

However, clearly this restriction only makes sense if we take  2 Z+
(2.20)

This is interesting. We have an example where a parameter in an action can only take integer values. We will see many further examples as these lectures progress. 

In the present context, the quantisation of  means that the CPN 1 phase space of the system has a quantised volume. 

Again, this sits nicely with the Bohr-Sommerfeld
interpretation of dividing the phase space up into parcels.

each choice of , the Hilbert space inherits an action under the SU (N ) symmetry.

For example:
•  = 0: The Hilbert space consists of a single state, |0i. This is equivalent to
putting a particle in the trivial representation of the gauge group.
•  = 1: The Hilbert space consists of N states, wi† |0i. This describes a particle
transforming in the fundamental representation of the SU (N ) gauge group.
•  = 2: The Hilbert space consists of 12 N (N + 1) states, wi† wj† |0i, transforming in
the symmetric representation of the gauge group.

In this way, we can build any symmetric representation of SU (N ). 

If we were to treat the degrees of freedom wi as Grassmann variables, and so replace the commutators in (2.18) with anti-commutators, {wi , wj† } = ij , then it’s easy to convince yourself that we would end up with particles in the anti-symmetric representations of SU (N ). 
