---
heading: Section 26
title: "Wilson Loops Revisited"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 52
---


## 2.5.3 Wilson Loops Revisited

There are 2 different possible phases of Yang-Mills theory: 

1. The Coulomb phase
2. The confining phase

The difference between them lies in the forces experienced by two well-separated probe particles.

6

This plot was taken from the paper by D. Ebert, R. Faustov and V. Galkin, arXiv:0903.5183.

Coulomb: V (r) ⇠ 1/r
• Confining: V (r) ⇠ r

To this, we could add a third possibility that occurs when the gauge field is Higgsed,
so that electric charges are completely screened. In this case we have

• Higgs: V (r) ⇠ constant

We’ll discuss this phase more in Section 2.7.3.

Usually in a quantum field theory (or in a statistical field theory) we identify the phase by computing the expectation value of some order parameter. 

What is the order parameter for confinement?

Let’s return to Maxwell theory. If we want to compute the path integral in the presence of an electrically charged probe particle, we simply introduce
the particle by its associated current J μ , which now acts as a source. We then add to
the action the term Aμ J μ. 

Moreover, for a probe particle which moves along a worldline C, the current J is a delta-function
localised on C. We then compute the partition

<!-- H
i CA
function with the insertion e
,
✓ I ◆E Z
✓ I ◆
D
exp i A
= DA exp i A eiSMaxwell
(2.73)
C
C -->

where we’re being a little sloppy on the right-hand-side, omitting both gauge fixing terms and the normalisation factor coming from the denominator.

In Yang-Mills, there is a similar story. The only difference is that we can’t just stipulate a fixed current J μ because the term Aμ J μ is not gauge invariant. 

Instead, we must introduce some internal colour degrees of freedom for the quark, as we described previously in Section 2.1.3. As we saw, integrating over these colour degrees of freedom leaves us with the Wilson loop W [C], which we take in the fundamental representation 

<!-- ✓ I ◆
W [C] = tr P exp i A -->

Performing the further path integral over the gauge fields A leaves us with the expectation value of this Wilson loop

<!-- ✓ I ◆
D
E Z
W [C] = DA tr P exp i A eiSY M
(2.74)
C -->

Consider the specific closed loop C shown in the figure. We again take this to sit in the fundamental representation. 

It has the interpretation that we create a quark anti-quark pair, separated by a distance r, at some time in the past. These then propagate forward for time T , before they annihilate back to the vacuum.
What behaviour would we expect from the expectation value hW [C]i? 

We’ll work in Euclidean space. Recall from our earlier lectures on quantum field theory that, for long times, the path integral projects the system onto the lowest energy state. 

Before the quarks appear, and after they’ve gone, this is the ground state of the system which we can take to have energy zero. (Actually, you can take it
to have any energy you like; its contribution will disappear from our analysis when we divide by the normalisation factor that missing on the right-hand-side of (2.73) and (2.74).) 

However, in the presence of the sources, the ground state of the system has energy V (r). This
means that we expect the Euclidean path integral to give

<!-- D
E
lim W [C] ⇠ e V (r)T
r
T -->
Figure 20:
r,T !1

This now gives us a way to test for the existence of the confining the phase directly in Yang-Mills theory. If the theory lies in the confining phase, we should find

<!-- D
E
lim W [C] ⇠ e A[C]
(2.75)
r,T !1 -->

where A[C] is the area of the the loop C. This is known as the area law criterion for confinement. We won’t be able to prove that Wilson loops in Yang-Mills exhibit an area law, although we’ll offer an attempt in Section 4.2 when we discuss the strong coupling expansion of lattice gauge theory. 
 
We will have more success in Section 7 and 8 when we demonstrate confinement in lower dimensional gauge theories. 

If a theory does not lie in the confining phase, we get different behaviour for the Wilson loop. For example, we could add scalar fields which condense and completely break the gauge symmetry. 


This is the Higgs phase, and we will discuss it in more detail in Section 2.7 where we first introduce dynamical matter fields. In the Higgs phase, we have

<!-- D
E
lim W [C] ⇠ e μL
r,T !1 -->

where L = 2(r + T ) is the perimeter of the loop and μ is some mass scale associated to the energy in the fields that screen the particle. 

This kind of perimeter law is characteristic of the screening phase of a theory.

