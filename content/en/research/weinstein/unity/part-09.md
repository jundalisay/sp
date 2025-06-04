---
heading: "Part 9"
title: "Lagrangians"
description: ""
c: "darkgoldenrod"
weight: 12
date: 2025-05-30
---



There are multiple considerations in putting forward Lagrangians in this context. In particular there are issues of redundant equations, Bianchi Identities, cohomological considerations for deformation complexes, so-called Supersymmetry, agreement with prior physical equations, and the issue of DiracPairs where one set of more restrictive (usually first order) equations guarantees the solution of the equations of a different related (usually second order) Lagrangians.


### 9.1 The 1st Order Bosonic Sector

The purely Bosonic portion of the action is a real valued function:

<!-- I
B
1
: G × MET (X1,3
) :−→ R (9.1) -->

While there are other possibilities to explore for the choice of the Shiab operator, Let

<!-- }· ε : Ω2
(Y
7,7
, ad) −→ Ω
d−1
(Y
7,7
, ad) (9.2) -->


we will begin with one10 which makes the parallel to Einstein’s contraction of the full Riemannian curvature explicit:

<!-- }· εξ = [(ε
−1Φ
1
ε) ∧ (∗ξ)]
| {z }
Ricci Like
−
∗
2
[(ε
−1Φ
1
ε)
| {z }
gµν - like.
∧ ∗ [(ε
−1Φ
2
ε) ∧ (∗ξ)]]
| {z }
Ricci Scalar Like
(9.3) -->



for a gauge covariant ad-valued 2-form ξ ∈ Ω (Y, ad).

Here, as in Einstein’s case, the Weyl curvature tensor is annihilated by the contraction operator above so the operator preserves and mixes only the analogues of the Ricci and Scalar curvature components. The puzzle of how to kill off the Weyl curvature contribution to recover Riemannian geometry’s ability to form Einstein tensors for gravity in such a way as to preserve Ehresmannian gauge covariance is part of what is meant by Geometric Unity. 

This leads to a model that abstracts the Einstein-Hilbert and Chern-Simons actions to generate linear field equations in the Riemannian and 9We have closely followed the history referred to by Dirac in his 1963 Scientific American Article discussing Schrodinger and the Multiple iterations of Einstein’s (and Grossman’s) introduction of General Relativity and taken from them that an author will have to fine tune the instantiation of a new idea. What we take away from this is that the tiny minority of authors who put forward new physical law have to have the right to explore instantiations of new ideas without the community over indexing on the instance put forward. As with any release, the interested community is welcome to send bug fixes.

10The author used to construct such objects from representation theory concepts like highest
weights. The Shiab operator that he settled on (but cannot yet now locate) was chosen for its
properties relative to the Bianchi identity. Even if it can be located, it will be in a different
language with which the author no longer feels entirely familiar. So it is.

Ehresmannian curvature tensors via an action I
1 which for only the Bosonic
fields of integral spin (ε, $ on Y and ג on X) looks like:

<!-- I
B
1
(ωY , גX) = I
B
1
((εY , $Y ), גX) (9.4)
=<
Shifted
Torsion
z}|{
Tω , ∗
|{z}
Hodge
Star
(
Einstein
Ricci
Shiab
z}|{
}· ω ( FBω
|{z}
Metric
Curvature
+
C-S Like Terms
z }| {
1
2
dBω Tω +
1
3
[Tω, Tω])+κ1
2
Tω
|{z}
Shifted
Torsion
) >
Zorro
Metric
z}|{
g
ג
=
Z
Y
Tr(($−ε
−1
d0ε)∧∗([(ε
−1Φ
1
ε) ∧ (∗(·))]
| {z }
Ricci Like
−
∗
2
[(ε
−1Φ
1
ε)∧∗ [(ε
−1Φ
2
ε) ∧ (∗(·))]]
| {z }
Ricci Scalar Like
)
(ε
−1Rgθ
ijσε +
1
2
(d0 + ε
−1
d0ε)($ − ε
−1
d0ε) + 1
3
[$ − ε
−1
d0ε, $ − ε
−1
d0ε]))
+κ1
Z
Y
Tr(($ − ε
−1
d0ε) ∧ ∗($ − ε
−1
d0ε))
where:
1. Rgθ -->

ijσ is the Spinor bundle’s Riemannian curvature induced from the LeviCivita connection.

<!-- 2. Tω = $ − ε
−1d0ε ∈ Ω
1
(Y, ad) is the augmented torsion tensor. -->

3. The Shiab Operator }· ω on an ad-valued 2-form ξ ∈ Ω

(Y, ad)is given in
accordance with the Einsteinian contraction

<!-- }· εξ = [(ε
−1Φ
1
ε) ∧ (∗ξ)]
| {z }
Ricci Like
−
∗
2
[(ε
−1Φ
1
ε) ∧ ∗ [(ε
−1Φ
2
ε) ∧ (∗ξ)]]
| {z }
Ricci Scalar Like -->

4. The Bω connection is the gauge rotation of the Levi-Civita Spin Connection: Bω = ∇0 + ε−1d0ε

By the calculus of variations we obtain Euler-Lagrange Equations of the form:

<!-- dI
B
1
(ג, ω)|Y 14 =


Υω
⊕
Ξω

 ∈
Ω
d−1
(ad)
⊕
Ω
d
(ad)
(9.5) -->

where generally
Ξ = DωΥω (9.6)

for some operator differential Dω so that the vanishing of Ξω = 0 need not be
considered if Υω = 0 by the redundant nature of the second equation.

By gathering up terms we can express them in a fashion that is closer to the more familiar equations of General Relativity. Thus we have:

<!-- ∂I
B
1
((εY , $Y + sα), גX)
∂s =< α, }· ωFAω + ∗κ1Tω >=< α, Υ
B
ω > (9.7)
}· Fω
|{z}
Swerved Curvature
= Swervature = Sω
= − ∗ κ1 Tω
|{z}
Displaced Torsion
| {z }
Displasion=Tω
(9.8) -->

So that if one wanted to locate and recover from a GU equation:

Υω = Sω − Tω = 0 (9.9)

the more familiar terms of the Einstein Field Equations for Gravity, it would
generate an annotated equation along the lines of:

<!-- Sω
|{z}
Rµν− s
2
gµν
= Tω
|{z}
Λgµν
| {z }
Tµν
(9.10) -->

