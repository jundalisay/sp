---
heading: Section 16
title: "The Flow to Strong Coupling"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 32
---


## 2.4 The Flow to Strong Coupling

Our discussion in the previous sections has focussed on the classical (or, at the very least, semi-classical) approach to Yang-Mills. 

Such a description gives good intuition for the physics when a theory is weakly coupled, but often fails miserably at strong coupling. 

The next question we should ask is whether Yang-Mills theory is weakly or strongly coupled.

We have chosen a scaling in which the coupling g 2 sits in front of the action

<!-- Z
1
SYM = 2 d4 x tr F μ⌫ Fμ⌫
(2.55)
2g -->

The quantum theory is defined, in the framework of path integrals, by summing over all field configurations weighted, with eiSY M in Minkowski space or e SY M in Euclidean space. 

When g 2 is small, the Euclidean action has a deep minimum on the solutions to the classical equations of motion, and these dominate the path integral. 

In this case, the classical field configurations provide a good starting point for a saddle point
analysis. 

(In Minkowski space, the action is a stationary point rather than a minimum on classical solutions but, once again, these dominate the path integral.) In contrast,
when g 2 is large, many field configurations contribute to the path integral. 

In this case, we sometimes talk about quantum fluctuations being large. Now the quantum state
will look nothing like the solutions to the classical equations of motion.

All of this would seem to suggest that life is easy when g 2 is small, and harder when g 2 is large. However, things are not quite so simple. 

This is because the effective value of g 2 differs depending on the length scale on which you look: we write g 2 = g 2 (μ), where μ is an appropriate energy scale, or inverse length scale. 

Note that this is quite a radical departure from the the classical picture where any constants you put in the action remain constant. 

In quantum field theory, these constants are more wilful: they take the values they want to, rather than the values we give them.

We computed the running of the gauge coupling g 2 at one-loop in our previous course on Advanced Quantum Field Theory. (We will review this computation in Section 2.4.2 below.) 

The upshot is that the coupling constant depends on the scale μ as

<!-- 1
1
= 2
2
g (μ)
g0
11 C(adj)
⇤2U V
log
3 (4⇡)2
μ2
(2.56) -->


where g02 is the coupling constant evaluated at the cut-off scale ⇤U V .

Here C(adj) is a group theoretic factor. Recall that we have fixed a normalisation of the Lie algebra generators in the fundamental representation to be (2.2),

<!-- ⇥
⇤ 1
tr T a T b = ab
2 -->

(2.57)

Having pinned down the normalisation in one representation, the other representations R will have different normalisations,

<!-- ⇥
⇤
tr T a (R)T b (R) = I(R) ab -->

The coefficient I(R) is called the Dynkin index of the representation R. The convention (2.57) means that I(F ) = 12 . 

The group theoretic factor appearing in the beta function is simply the Dynkin index in the adjoint representation,

<!-- C(adj) = I(adj) -->

It is also known as the quadratic Casimir, which is why it is denoted by a different letter. 

For the various simple, compact Lie groups it is given by

<!-- G
C(adj)
SU (N )
N
SO(N )Sp(N )E6E7E8F4G2
1
N
2N +123/21/23/22
1 -->

Note that the adjoint representation of E8 is the minimal representation; hence the appearance of C(adj) = I(F ) = 12 .

The running of the gauge coupling (2.56) is often expressed in terms of the beta function

<!-- (g) ⌘ μ
dg
=
dμ
0g
3
with
0 =
11 C(adj)
3 (4⇡)2
(2.58) -->

The minus sign in (2.56) or, equivalently, in (2.58), is all important. It tells us that the gauge coupling gets stronger as we flow to longer length scales. In contrast, it is weaker at short distance scales. This phenomena is called asymptotic freedom.

Asymptotic freedom means that Yang-Mills theory is simple to understand at high energies, or short distance scales. 

Here it is a theory of massless, interacting gluon fields whose dynamics are well described by the classical equations of motion, together with quantum corrections which can be computed using perturbation methods. 

In particular, our discussion of instantons in Section 2.3 is valid at short distance scales.

However, it becomes much harder to understand what is going on at large distances where the coupling gets strong.

The beta function (2.58) is valid only when g 2 (μ) ⌧ 1. This equation therefore predicts its own demise at large distance scales.

We can estimate the distance scale at which we think we will run into trouble. Taking the one-loop beta function at face value, we can ask: at what scale does g 2 (μ) diverge?

This happens at a finite energy

<!-- 2
⇤QCD = ⇤U V e1/2 0 g0
(2.59) -->

For historical reasons, we refer to this as the “QCD scale”, reflecting its importance in the strong force. Alternatively, we can write ⇤QCD in terms of any scale μ,

<!-- 2
⇤QCD = μ e1/2 0 g (μ) -->

and d⇤QCD /dμ = 0. 

For this reason, it is sometimes referred to as the RG-invariant scale.

Asymptotic freedom means that 0 < 0. This ensures that if g0 ⌧ 1, so that the theory is weakly coupled at the cut-off, then ⇤QCD ⌧ ⇤U V. 

Yang-Mills theory naturally generates a scale ⇤QCD which is exponentially lower than the cut-off ⇤U V of the theory. 

Theoretical physicists spend a lot of time worrying about “naturalness” which, at heart, is the question of how Nature generates different length scales. 

The logarithmic running of the coupling exhibiting by Yang-Mills theory provides a beautiful mechanism to do this. 

As we will see moving forwards, all the interesting physics in Yang-Mills occurs at energies of order ⇤QCD .
Viewed naively, there’s something very surprising about the emergence of the scale ⇤QCD. 

This is because classical Yang-Mills has no dimensionful parameter. Yet the quantum theory has a physical scale, ⇤QCD . 

It seems that the quantum theory has generated a scale out of thin air, a phenomenon which goes by the name of dimensional transmutation. 

In fact, as the definition (2.59) makes clear, there is no mystery about this. 

Quantum field theories are not defined only by their classical action alone, but also by the cut-off ⇤U V . 

Although we might like to think of this cut-off as merely a crutch, and not something physical, this is misleading. It is not something we can do without. And it this cut-off which evolves to the physical scale ⇤QCD . 

The question we would like to ask is: what does Yang-Mills theory look like at low energies, comparable to ⇤QCD ? 

This is a difficult question to answer, and our current understanding comes primarily from experiment and numerical work, with intuition built from different analytic approaches. 

The answer is rather startling: Yang-Mills theory does not describe massless particles. 

Instead, the gluons bind together to form massive particles known as glueballs. 

These particles have a mass that is of the order of ⇤QCD , but figuring out the exact spectrum remains challenging. 

We sometimes say that the theory is gapped, meaning that there is a gap in the energy spectrum between the ground state, which we can take to have E = 0, and the first excited state with energy E = M c2 , where M is the mass of the lightest glueball.

Proving the mass gap for Yang-Mills is one of the most important and difficult open problems in mathematical physics. 

In these lectures we will restrict ourselves to building some intuition for Yang-Mills theory, and understanding some of the consequences of the mass gap.

In later sections, will also see how the situation changes when we couple Yang-Mills to dynamical matter fields.

Before we proceed, I should mention a rather subtle and poorly understood caveat.

We have argued in Sections 2.2 and 2.3 that the dynamics of Yang-Mills theory also depends on the theta parameter and we can ask: how does ✓ affect the spectrum? 

We have only a cursory understanding of this. It is thought that, for nearly all gauge groups, Yang-Mills remains gapped for all values of ✓. 

However, something interesting happens at ✓ = ⇡. Recall from Section 1.2.5 that ✓ = ⇡ is special because it preserves time-reversal invariance, more commonly known in particle physics as CP. 

For most gauge groups, it is thought that the dynamics spontaneously breaks time reversal invariance at ✓ = ⇡, so that Yang-Mills has two degenerate ground states. 

We will give an argument for this in Section 3.6 using discrete anomalies, and another in Section 6.2.5 when we
discuss the large N expansion. 

However, there is speculation that the behaviour of Yang-Mills is rather different for gauge group G = SU (2) and that, while gapped for all ✓ 6= ⇡, this theory actually becomes gapless at ✓ = ⇡, where it is conjectured to be described by a free U (1) photon. 

<!-- We will have nothing to say about this in these lectures. -->
