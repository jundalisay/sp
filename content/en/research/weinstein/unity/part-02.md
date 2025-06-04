---
heading: "Part 2"
title: "From Unified Field Theory to Quantum Gravity and Back"
description: ""
c: "darkgoldenrod"
weight: 12
date: 2021-04-01
---



## 2 Incompatibility and Incompleteness Blocking Geometric Unification

Einstein’s theory of gravity cannot be unified with the Standard Model of quantum field theory because there is no known way to renormalize a quantum theory of metrics. 

However, this betrays a focus on making the work of Einstein submit to the viewpoint of Bohr, that is the signature of a group of quantum theorists who view holdouts refusing to acknowledged the supremacy of the received quantum viewpoint as inviting quantum domination. 

I believe with Einstein that the Quantum is indisputable, but that its instantiations and their interpretations do not carry the same infallibility.

There are many incompatibilities between General Relativity and the classical field theory whose quantization defines the standard model.

Our gambit is that if there is a natural classical field theory that strongly resembles the standard model together with General Relativity, then if it can be shown to emerge naturally from minimal assumptions, it is likely to be correct or close to correct and may well suggest its own preferred quantization. 

This cannot of course be proven but it is stated here as it is the governing philosophy of the work at hand.


### 2.1 Failure of Gauge Covariance: Einsteinian Projection

One of the curious failures of modern gauge theory is the uncomfortable accommodation it gives to Einstein’s geometric general relativity. At first blush, a theory of gravity built on curvature should be a natural fit for the concept of
bundle symmetry. For any curvature tensor of a connection on a principal-G
bundle PG, it always lives as a Lie Algebra valued 2-form:

<!-- FA ∈ Ω
2
(ad(PG)) (2.1) -->

and the Riemannian curvature R l
ijk is no different, lying as it does as a 2-form
valued in the so called adjoint to Vierbein bundle. In fact,

<!-- R
l
ijk = F∇gµν ∈ Ω
2
(Λ2
(T
∗
(X)))  -->

(2.2) for the Levi-Civita connection ∇gµν of a metric tensor gµν as

<!-- Λ
2
(T
∗
(X)) = ad(PFr) (2.3) -->

for the given metric. Further, the Riemannian curvature is extremely well behaved under gauge transformations

<!-- FA·h = h
−1
· FA · h (2.4) -->

just as if it were any other curvature tensor.
The incompatibility with gauge theory is in fact entirely due to the fact
that Einstein made essential use of a linear algebraic projection of his curvature
tensor which treated the twin appearances of Λ2

<!-- (T
∗X) in the definition of the
Riemannian Curvature Rl
ijk ∈ Ω
2
(X,Λ
2
(T
∗X))  -->

on a common footing, while

the gauge transformations strongly distinguish the two by acting trivially on the copy corresponding to Ω2

<!-- (T
∗X) = Γ∞(Λ2
(T
∗X)) but non-trivially on the
copy corresponding to ad(PFr) = Λ2
(T
∗X). This leads to the simple fact that
Einstein contraction or projection
PE : Λ2
(T X) ⊗ Λ
2
(T X) −→ S
2
(T X) (2.5)
fails to commute
PE(FA·h) 6= (PE(FA)) · h (2.6) -->

with gauge transformations h.

Curiously, this failure is often covered over by many wishing to shoehorn General Relativity into the gauge theoretic paradigm by asserting that the diffeomorphism group of ‘General Coordinate Transformations’ is somehow the Gauge Group ‘H’ of GR, while the space of Metrics parameterizes the relevant space of Levi-Civita Connections ‘A’ resulting in a weak version of A/H. Given what we take to be the self-evident artificiality of such claims, we merely note them here and will not dwell on them further.


### 2.2 Failure of Gauge Covariance: Torsion

In an explicitly trivialized coordinate patch, the covariant derivative ∇A corresponding to a connection A can be given by specifying the connection as an ad-valued 1-form A relative to the trivial connection d coming from the trivialization by abuse of language. This leads to the transformation formula:
<!-- h
−1
◦ (d + A) ◦ h = d + h
−1
· A · h | {z }

Gauge Covariant
+ h
−1
· (dh)
| {z }
Gauge Non-Covariant -->

(2.7)

highlighting that the portion of A which is peculiar to the connection is in fact
gauge covariant while the portion peculiar to the trivialization lends a disease
of gauge non-covariance to all connections which has no dependence on the
connection A at hand.

In the absence of a trivialization, but the presence of a prefered connection
A0

such as the Levi-Civita connection Ag = A0
, we can write:

<!-- h
−1
◦ ∇A ◦ h − ∇0 = h
−1
◦ (∇0 + A) ◦ h − ∇0
(2.8)
= h
−1
◦ A ◦ h + h
−1
◦ ∇0
◦ h = h
−1Ah | {z }
Connection Specific
+ h
−1
(d0h)
| {z } -->

Common Disease
to see that again part of the transformation law is well behaved while the diseased term is dependent only on the exterior derivative d0 = dA0 coupled to the
distinguished connection.

The problem here can be seen instantly if one tries to naively include the
gauge potential A directly in a Lagrangian or action I:
I(A) = ||A||2 =< A, A > (2.9)
so that under a gauge transformation h we have:

...

<!-- I(A · h) = ||A · h||2 =< A · h, A · h > (2.10)
=< h−1Ah + h
−1
dh, h−1Ah + h
−1
dh >
= ||h
−1Ah||2
| {z }
Gauge Invariant
+ ||h
−1
dh||2
| {z }
Common Disease
+ 2 < h−1Ah, h−1
dh >
| {z }


Gauge Potential-Specific Disease  -->

leading to a failure of gauge invariance due to both a shared and idiosyncratic
term spoiling the action under symmetry. Typically, the response to this is to
avoid putting the potential into the action directly and to work instead with
the better behaved curvature tensor derived from the 1-forms in the case of
the Standard Model, or to give up on gauge invariance at the bundle level (i.e.
Einstein’s compression of Riemann’s curvature tensor) and use the action to
penalize the torsion into vanishing (i.e. the Palatini action).

