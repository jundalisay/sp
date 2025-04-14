---
heading: Section 6
title: "The Path Integral over the Colour Degrees of Freedom"
description: "We can also study the quantum mechanical action (2.17) using the path integral"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 12
---


## The Path Integral over the Colour Degrees of Freedom

We can also study the quantum mechanical action (2.17) using the path integral.

Here, we fix the background gauge field Aμ and integrate only over the colour degrees of freedom w(⌧ ) and the Lagrange multiplier (⌧ ). 

First, we ask: how can we see the quantisation condition of  (2.20) in the path integral? 

There is a rather lovely topological argument for this, one which will be repeated a number of times in subsequent chapters. 

The first thing to note is that the term in the Lagrangian transforms as a total derivative under the gauge symmetry.

Naively we might think that we can just ignore this. However, we shouldn’t be quite so quick as there are situations where this term is non-vanishing.

Suppose that we think of the worldline of the system, parameterised by ⌧ 2 S1 rather than R.

Then we can consider gauge transformations ff(⌧ ) in which ff winds around R the circle, so that d⌧ ff ̇ = 2⇡n for some n 2 Z. The action (2.17) would then change
as Sw ! Sw + 2⇡n under a gauge transformation which seems bad. 

However, in the quantum theory it’s not the action Sw that we have to worry about but eiSw because this is what appears in the path integral. And eiSw is gauge invariant provided that 2 Z.

It is not difficult to explicitly compute the path integral. 

For convenience, we’ll set = 1, so we’re looking at objects in the N representation of SU (N ). It’s not hard to see that the path integral over causes the partition function to vanish unless we put
in two insertions of w. 

We should therefore compute Z Zw [A] := D DwDw† eiSw (w, ;A) wi (⌧ = 1)wi† (⌧ = 1) 

The insertion at ⌧ = 1 can be thought of as placing the particle in some particular internal state. 

The partition function measures the amplitude that it remains in that
state at ⌧ = +1 We next perform the path integral over w and w† . This is tantamount to summing a series of diagrams like this:



where the straight lines are propagators for wi which are simply ✓(⌧1 ⌧2 ) ij , while the dotted lines represent insertions of the gauge fields A. 

It’s straightforward to sum these. 

The final result is something familiar:
<!-- ✓ Z
◆
Zw [A] = tr P exp i d⌧ A(⌧ )
(2.21) -->

This, of course, is the Wilson loop W [C]. We see that we get a slightly different perspective on the Wilson loop: it arises by integrating out the colour degrees of freedom of the quark test particle.

## 2.2 The Theta Term

The Yang-Mills action is the obvious generalisation of the Maxwell action,

<!-- Z
1
SYM =
d4 x tr F μ⌫ Fμ⌫
2
2g -->

We add the Lorentz invariant, a gauge invariant and quadratic in field strengths. 

This is the theta term:

<!-- Z
✓
S✓ =
d4 x tr ?F μ⌫ Fμ⌫ -->

(2.22)

where ?F μ⌫ = 12 ✏μ⌫⇢ F⇢ . 

Clearly, this is analogous to the theta term that we met in Maxwell theory in Section 1.2. 

Note, however, that the canonical normalisation of the Yang-Mills theta term differs by a factor of 12 from the Maxwell term (a fact which is a little hidden in this notation because it’s buried in the definition of the trace (2.2)).

This is because the periodicity of the Maxwell theta term arises from the first Chern number, c1 (A)2 while the periodicity of the non-Abelian theta-term arises from the second Chern number c2 (A).)

The non-Abelian theta term shares a number of properties with its Abelian counterpart. 

In particular,

• The theta term is a total derivative. It can be written as
Z ✓ S✓ = 2 d 4 x @ μ K μ
8⇡

(2.23)

<!-- where

μK =✏
μ⌫⇢
tr
✓
A⌫ @⇢ A
2i
A⌫ A⇢ A
3
◆ -->

(2.24)

This means that, as in the Maxwell case, the theta term does not change the classical equations of motion.
• ✓ is an angular variable. 

For simple gauge groups, it sits in the range
✓ 2 [0, 2⇡)

This follows because the total derivative (2.23) counts the winding number of a gauge configuration known as the Pontryagin number such that, evaluated on any configuration, S✓ = ✓n with n 2 Z. 

This is similar in spirit to the kind of argument we saw in Section 1.2.4 for the U (1) theta angle, although the details differ because non-Abelian gauge groups have a different topology from their Abelian cousins. 

We will explain this in the rest of this section and, from a slightly different perspective, in Section 2.3.

There can, however, be subtleties associated to discrete identifications in the gauge group in which case the range of ✓ should be extended. 

<!-- We’ll discuss this in more detail in Section 2.6.
In Section 1.2, we mostly focussed on situations where ✓ varies in space.  -->

This kind of “topological insulator” physics also applies in the non-Abelian case. 

However, the topology of non-Abelian gauge groups is somewhat more complicated. 
 
This affects the spectrum of states in the Yang-Mills theory even when ✓ is constant. 

This section explores this physics.

