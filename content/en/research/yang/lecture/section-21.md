---
heading: Section 21
title: "Electric Probes and Coulomb Versus Confining"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 42
---



## 2.5 Electric Probes

The most basic question in Maxwell’s theory of Electromagnetism is: What’s the force between two charged particles? 

In these calculations, the charged particles are sources which we’ve inserted by hand.

We’re using them as a probe of the theory, to see how the electromagnetic fields respond in their presence. In this section we will develop the tools that will allow us to ask similar questions about non-Abelian gauge theories.


###  2.5.1 Coulomb vs Confining

We start by building up some expectation from the classical physics. Asymptotic freedom means that these classical results will be valid when the particles are close by, separated by distances ⌧ 1/⇤QCD , but are unlikely to hold when they are far separated.

Nonetheless, it will be useful to understand the theory in this regime, if only because it highlights just how surprising the long distance, quantum behaviour actually is. 

In electromagnetism, two particles of equal and opposite charges ±e, separated by a distance r, experience an attractive Coulomb force. 

This can be described in terms of the potential energy V (r),

<!-- V (r) =
e2
4⇡r -->

In the framework of QED, we can reproduce this from the the tree-level exchange of a single photon, as shown in the figure. 

We did this in first course on Quantum Field Theory.
Here we do the same calculation in SU (N ) Yang-Mills theory. 

We refer to the charged particles as quarks. For now, we’ll take these

Figure 12:
particles to sit in the fundamental representation of SU (N ), although the methods we use here easily generalise to arbitrary gauge groups and representations. Each quark and anti-quark carries a colour index, i = 1, . . . , N .

Moreover, when they exchange a gluon, this colour index can change. The tree-level diagram takes the same form, but with a gluon exchanged instead of a photon. It gives

<!-- V (r) =
g2 a ? a
T T
4⇡r ki lj
(2.64) -->

But we’ve still got those colour indices to deal with, i, j for ingoing, and k, l for outgoing. 

We should think of T a T ? a as an N 2 ⇥ N 2 matrix, acting on the N 2 different ingoing colour states. 

These different N 2 states then split into different irreducible representations. 

For our quark and anti-quark, we have

<!-- N ⌦ N̄ = 1
adj
(2.65) -->

where the adjoint representation has dimension N 2 1. The matrix T a T ? a will then have two different eigenvalues, one for each of these representations. This will lead to two different coefficients for the forces.


## An Aside on Group Theory

We need a way to compute the eigenvalues of T a T ? a in these two different representations. In fact, we’ve met this kind of problem before; it’s the same kind of issue
that arose in our lectures on Applications of Quantum Mechanics when we treated the spin-orbit coupling L · S of an atom. 

In that case we wrote J = L + S and used the
identity L · S = 12 (J2 L2 + S2 ) = 12 (j(j + 1) l(l + 1) s(s + 1)).

We can repeat this trick for any group G. Consider two representations R1 and R2 and the associated generators T a (R1 ) and T a (R2 ). 

We construct a new operator

S a (R) = T a (R1 ) ⌦ 1 + 1 ⌦ T a (R2 )

We then have

<!-- T a (R1 ) ⌦ T a (R2 ) =
1 a
[S (R)S a (R) + T a (R1 )T a (R1 ) ⌦ 1 + 1 ⌦ T a (R2 )T a (R2 )]
2 -->

But it is simple to show that T a (R)T a (R) commutes with all elements of the group and so is proportional to the identity, T a (R)T a (R) = C(R) 1
(2.66)

where C(R) is known as the quadratic Casimir, a number which characterises the representation R. 

In our discussion of beta functions in Section 2.4, we encountered the Dynkin index, which is the coefficient of the trace normalisation tr T a (R)T b (R) = I(R) ab


The two are related by I(R) dim(G) = C(R) dim(R) where dim(G) is the dimension of the group and dim(R) is the dimension of the representation. 

Note that this consistent with our earlier claim that I(adj) = C(adj). For G = SU (N ), the fundamental and adjoint representations have

<!-- C(N) = C(N̄) = while the symmetric
N2 1
2N -->

and anti-symmetric representations have

<!-- ⇣ ⌘ (N 2)(N + 1)
and C
=
N
1)(N + 2)
N -->
