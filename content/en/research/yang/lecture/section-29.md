---
heading: Section 29
title: "The Theta Angle and the Witten Effect"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 58
---


The Witten effect gives rise to an interesting interplay between ’t Hooft lines and the theta angle of Yang-Mills. 

Section 1.2.3 said that a Dirac monopole of charge m in Maxwell theory picks up an electric charge proportional to the ✓ angle, given by:

<!-- q=
✓m
2⇡ -->

This analysis carries over to ’t Hooft lines in both Maxwell and Yang-Mills theories.

In the latter case, a shift of ✓ ! ✓ + 2⇡ changes the electric charge carried by a line operator,

<!-- ✓ ! ✓ + 2⇡
)
(z e , z m ) ! (z e + z m , z m ) -->

For G = SU (N ), this maps the spectrum of line operators back to itself. However, for G = SU (N )/ZN there is something of a surprise, because after a shift by 2⇡, the spectrum of line operators changes. 

This is shown in Figure 22 for G = SU (3)/ZN . We
learn that the theory is not invariant under a shift of ✓ ! ✓ + 2⇡. Instead, to return to

<!-- Zm
Zm
Zm
Ze
Ze
Ze -->
Figure 22: The spectrum of dyonic line operators in gauge group SU (3)/Z3 , shown for ✓ = 0
(on the left), ✓ = 2⇡ (in the middle) and ✓ = 4⇡ (on the right).

our original theory, with the same line operators, we must send ✓ ! ✓ + 2⇡N . In other
words,

<!-- G = SU (N ) has ✓ 2 [0, 2⇡)
G = SU (N )/ZN has ✓ 2 [0, 2⇡N ) -->

We’ll explore some consequences of this in Section 3.6 when we discuss anomalies in discrete symmetries.

One of the arguments we gave in Section 2.2 for the periodicity ✓ 2 [0, 2⇡) was the
R
appropriate quantisation of the topological charge d4 x tr ?F μ⌫ Fμ⌫. 

Instantons provide solutions to the equations of motion with non-vanishing topological charge. 

For Yang-Mills with G = SU (N )/ZN , the enlarged range of ✓ suggests that there might be “fractional instantons”, configurations that carry 1/N th the charge of an instanton. 

In fact, there are no such non-singular configurations on R4 . But these fractional instantons do arise on manifolds with non-trivial topology. 

For example, if we take Euclidean spacetime to be T4 , we can impose twisted boundary conditions in which, upon going around any circle, gauge fields come back to themselves up to a gauge transformation which lies in the centre ZN. 

Such boundary conditions are allowed for gauge group G = SU (N )/ZN , but not for G = SU (N ). 

One can show that these classes of configurations carry the requisite fractional topological charge. 

## ’t Hooft Lines as Order Parameters 

One of the primary motivations for introducing line operators is to find order parameters that will distinguish between different phases of the theory. 

When G = SU (N ) we have the full compliment of Wilson lines. As we saw in Section 2.5, an area law for the
fundamental Wilson loop signals that the theory lies in the confining phase, which is the expected behaviour for pure Yang-Mills. 

If we also add scalar fields to the theory,  these could condense so that we sit in the Higgs phase; in this case the Wilson loop exhibits a perimeter law.

If the gauge group is G = SU (N )/ZN , we no longer have the fundamental Wilson line at our disposal.

Instead, we have the fundamental ’t Hooft line with z m = 1, and this now acts as our order parameter. Since the local dynamics is independent of the global topology of the gauge group, pure Yang-Mills theory is again expected to confine. 

But, as in our discussion of superconductors in Section 2.5.2, the confinement of electric charge is equivalent to the screening of magnetic charge. This means that the signature of electric confinement is now a perimeter law for the ’t Hooft line.

We can also consider G = SU (N )/ZN Yang-Mills in the Higgs phase. The theory does not admit scalar fields in the fundamental representation, so we introduce adjoint scalars which subsequently condense. 

A single adjoint scalar will break the gauge group to its maximal torus, U (1)N 1 , but with two misaligned adjoint Higgs fields we can break the gauge symmetry completely. 

This is the Higgs phase. As described in Section 2.5.2, the Higgs phase can be thought of as confinement of magnetic charges. 

Correspondingly, the ’t Hooft line now exhibits an area law.

## That’s All Well and Good, but...

The difference between Yang-Mills with G = SU (N ) and G = SU (N )/ZN seems rather formal. 

As we mentioned above, all correlation functions of local operators in the two theories coincide, which means that any local experiment that we can perform will agree.

The theories only differ in the kinds of non-local probes that we can introduce.

You might wonder whether this is some pointless intellectual exercise.

If we consider Yang-Mills on flat R3,1 , then there is some justification in ignoring these subtleties: the physics of the two theories is the same, and we’re just changing the way we choose to describe it. 

However, even in this case these subtleties will help us say something non-trivial about the dynamics as we will see in Section 3.6 when we discuss discrete anomalies.

The real differences between the two theories arise when we study them on background manifolds with non-trivial topology. 

Here the two theories can have genuinely different dynamics. 

Perhaps the most straightforward case arises for Yang-Mills coupled to a single, massless adjoint Weyl fermion. This theory turns out to have supersymmetry and goes by the name of N = 1 super Yang-Mills. 

Although supersymmetry is beyond the scope of these lectures, it turns out that it provides enough of a handle for us to make quantitative statements about their dynamics. 

If we consider these theories
on spacetime R2,1 ⇥ S1 , the low energy dynamics, specifically the number of ground
states, does depend on the global topology of the gauge group.

