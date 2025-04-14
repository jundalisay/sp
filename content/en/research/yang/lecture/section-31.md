---
heading: Section 31
title: "Dynamical Matter"
description: "Each matter field must transform in a representation R of the gauge group G"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 60
---


## 2.7 Dynamical Matter

Until now, we have (mostly) focussed on pure Yang-Mills, without any additional, dynamical matter fields. It’s time to remedy this. 

We will consider coupling either scalar fields, , or Dirac spinors to Yang-Mills.

Each matter field must transform in a representation R of the gauge group G. In the Lagrangian, the information about our chosen representation is often buried in the covariant derivative, which reads

<!-- Dμ = @ μ
iAaμ T a (R) -->

where T a (R) are the generators of the Lie algebra in the representation R. For scalar fields, the action is:

<!-- Z
Sscalar = d4 x Dμ † Dμ
V( ) -->

where V ( ) can include both mass terms and 4 interactions. For spinors, the action is

<!-- Z
/
Sfermion = d4 x i  ̄D
m ̄ -->

If we have both scalars and fermions then we can also include Yukawa interactions between them.

Our ultimate goal is to understand the physics described by non-Abelian gauge theories coupled to matter. 

What is the spectrum of excitations of these theories? How do these excitations interact with other? How does the system respond to various probes and sources?


### 2.7.1 The Beta Function Revisited

The first question we will ask is: how does the presence of these matter degrees of freedom affect the running of the gauge coupling g 2 (μ)? 

This is simplest to answer for massless scalars and fermions. Suppose that we have Ns scalars in a representation Rs and Nf Dirac fermions in a representation Rf . The 1-loop running of the gauge coupling is

<!-- ✓ 2 ◆
1
1
1
11
1
4
⇤U V
= 2
I(adj)
Ns I(Rs )
Nf I(Rf ) log
(2.83)
2
2
g (μ)
g0 (4⇡)
3
3
3
μ2 -->

This generalises the Yang-Mills beta function (2.56). Recall that the Dynkin indices I(R) are group theoretic factors defined by the trace normalisations, tr T a (R)T b (R) = I(R) ab and we are working in the convention in which I(F ) = 12 for the fundamental (or minimal) representation of any group.

When a field has mass m, it contributes the running of the coupling only at scales μ > m, and decouples when μ < m. 

There is a smooth crossover from one behaviour to the other at scales μ ⇠ m, but the details of this will not be needed in these lectures.

Here we will briefly sketch the derivation of the running of the coupling, following Section 2.4.2. 

We will then look at some of the consequences of this result.

## The Beta Function for Scalars

If we integrate out a massless, complex scalar field, we get a contribution to the effective action for the gauge field given by

<!-- Z
1
Seff [A] = 2 d4 x trFμ⌫ F μ⌫ + Tr log( D2 )
2g -->

But this is something we’ve computed before, since it is the same as the ghost contribution to the effective action. 

The only differences are that we get a plus sign instead of a minus sign, because our scalars are the sensible kind that obey spin statistics, and that we pick up the relevant trace coefficient I(R), as opposed to I(adj) for the ghosts. We can then immediately import our results from Section 2.4.2 to get the scalar contribution in (2.83)

## The Beta Function for Fermions

If we integrate out a massless Dirac fermion, we get a contribution to the effective action for the gauge field given by

<!-- Z
1
/
Seff [A] = 2 d4 x trFμ⌫ F μ⌫ log det(iD)
2g -->

To compute the determinant, it’s useful to expand as

<!-- / = det 1/2 ( μ ⌫ Dμ D⌫ )
det(iD)
⇣
1 μ
1/2 1
= det
{ μ , ⌫ }Dμ D⌫
[ ,
2
2
⇣
⌘
i μ ⌫
1/2
2
= det
D + [ , ]Fμ⌫
4
⌫
]Dμ D⌫
⌘ -->

where, to go to the final line, we have used both the Clifford algebra { μ , ⌫ } = 2 μ⌫ , as well as the fact that [Dμ , D⌫ ] = iFμ⌫ . The contribution to the effective action is then

<!-- ⇣
⌘
1
i
/ =
log det(iD)
Tr log
D2 14 + [ μ , ⌫ ]Fμ⌫
2
4
2
μ
= 2Tr log( D ) + [ , ⌫ ]Fμ⌫ terms -->

Here the 12 has changed into a 2 after tracing over the spinor indices. We’re left having to compute the contribution from the [ μ , ⌫ ]Fμ⌫ terms. This is very similar in spirit to the extra term that we had to compute for the gauge fluctuations in Section
2.4.2. 

However, the difference in spin structure means that it differs from the gauge contribution by a factor of 1/2. The upshot is that we have

<!-- ✓ 2 ◆
Z
⇥
⇤ μ ⌫
1 4
T (R)
d4 k
⇤U V
2 μ⌫
/ =
log det(iD)
4
tr Āμ (k)Ā⌫ ( k) (k k
k
) log
2
4
2 3
(4⇡)
(2⇡)
k2 -->

which gives the fermionic contribution to the running of the gauge coupling in (2.83).

Note that, once again, contributions from the extra spin term (the 4) overwhelm the contribution from the kinetic term (the +4/3). But, because we are dealing with fermions, there is an overall minus sign. This means that fermions, like scalars, give a positive contribution to the beta function.

