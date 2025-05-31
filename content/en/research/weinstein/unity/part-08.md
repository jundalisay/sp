---
heading: "Part 8"
title: "The Family of Shiab Operators"
description: ""
c: "darkgoldenrod"
weight: 12
date: 2025-05-30
---


With this machinery notated and established, we can turn to the second major advantage of working in the Meta-Riemannian paradigm. 

Figure 5: Ship In a Bottle Construction.

In essence, gauge theory and relativity have been disconnected because of the incompatibility of contraction and gauge covariance of terms within the action.

- Gauge theory typically contracts between a differential form and some other bundle associated to the tangent bundle where the differential form is valued.
- Gauge rotation typically acts on the latter bundle without touching the forms.

The ‘Ship in a Bottle’ construction attempts to get around this difficulty. 

By incorporating the gauge group into the contraction operator, the gauge group rotates only the bundle valued portion of a collection contracting forms {Φi} in which these special invariant differential forms are valued in such a way that it exactly compensates for the a symmetry of treatment in the form being contracted. 

Suppose for example that η is a gauge covariant ad−valued differential form.

Then a Shiab contraction operator might look like:

<!-- }· εη = ∗
n
i
1±1
2 [(ε
−1Φrε) ∧ ∗mη]± (8.1) -->

or perhaps a sum of such terms, where typically Φr is a normed Lie Algebra Valued r-form valued in an invariant subspace of the structure group of the tangent bundle and the bracket is either a commutator or an anti-commutator with a factor of i out front in the case of the latter.

There is most likely a byzantine taxonomy of such objects along the lines of what Reese Harvey detailed for the Clifford Algebras in his book on Spinors and Calibrations.

The author is no longer in a position to go chasing after the complete picture
and simply details some of the available tools for customizing such operators.


## 8.1 Pure Trace Elements

As vector spaces over the real numbers,

<!-- Λ
∗
(T
∗X) = Cl(T
∗X) (8.2)
41 -->

but where the algebraic structures are somewhat different. In our case, when Y inherits a (7, 7) metric, we have an equivalence at the level of vector spaces:

<!-- ϑ : Λ∗
(T
∗Y ) −→ Cl(T
∗X) = R(128). (8.3)
If ClR(T
∗Y ) is included in its own own complexification it can be seen within
the matrix algebras
spin(64, 64) −→ u(64, 64)
↓ ↓
ϑ : gl(128, R) −→ gl(128, C)
| | | |
ϑ : ClR(T
∗Y ) −→ ClC(T
∗Y )
(8.4)
which commute on:
so(64, 64) “ = ” (Λ2 ⊕ Λ
6 ⊕ Λ
10 ⊕ Λ
14)
| {z }
/SL⊗/SR=/SL⊗/S
∗
L=/S
∗
R⊗/SR
⊕ (Λ1 ⊕ Λ
5 ⊕ Λ
9 ⊕ Λ
13)
| {z }
Λ2(/SL)⊕Λ2(/SR)
⊂ ClR(7,7). -->


<!-- (8.5)
What differs instead is what happens on
u(64, 64)/so(64, 64) “ = ” k0Λ
0 ⊕ k3Λ
3 ⊕ k4Λ
4 ⊕ k7Λ
7 ⊕ k8Λ
8 ⊕ k11Λ
11 ⊕ k12Λ

(8.6)
 -->
which must be multiplied by various factors of i inside the complexification.

Definition 8.1 Let {Φi}

<!-- 14
i=0 be a basis for the invariant subspaces of
[Λi
(R
7,7
) ⊗ u(64, 64)]Spin(7,7) (8.7)
seen as a Spin(7, 7) representation. -->


## 8.2 Thoughts on Operator Choice

The particulars of the Shiab operators are workmanlike and not of much interest.

The interesting aspect of them, is that they all essentially look like contracting over indices in the fashion familiar from Riemannian tensor geometry, but with some aspect of conjugation by the gauge group element ε ∈ H ⊂ G living inside the inhomogeneous gauge group G as a non-linear sigma-field of sorts. 

I chose them years ago via representation theory techniques involving highest weight representations rather than by the more indicial methods presented here with invariant elements Φi

The advantage was that the Bianchi identity was able to pick the best and most appropriate operator in different circumstances. 

Unfortunately, I am no longer conversant in that language and has been unable to locate the notes from decades ago that
originally picked out the operator of choice to play the role of the Swerve here.

The author either hopes to find the original calculations or to get back to the point where he can reconstruct this argument based on using the Bianchi identity to guarantee gauge perpendicularity and/or use the Bianchi identity to guarantee automatic solution of a differential equation in the curvature. 

Note: A brief discussion of additional tools for Shiab construction has been moved to a a short technical appendix.
