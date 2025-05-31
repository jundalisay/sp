---
heading: "Part 3.5"
title: "Chimeric Spinors and Heterogeneous Spin Bundles"
description: ""
c: "darkgoldenrod"
weight: 12
date: 2021-04-01
---


We have abstractly defined spinor bundles on Y , it behoves us to understand what kind of spinors we may have coaxed into existence.

We should begin by noting that the choice of (1, 3) metric signature (which
can be mirrored by choice of a (3, 1) and thus is not meaningfully distinguished
from it) is treated by us as anthropic data. If it were otherwise, there would
likely be no life to evolve to observe these structures. 

This recognition, forces
a (3, 6) signature on the space of traceless symmetric two tensors which, when
combined with the trace portion seen as either a (0, 1) or (1, 0) space, can
become either a (3, 7) or the (4, 6) metric respectively. Here again, we make an
anthropic choice and select the latter of the two for two reasons. 

In the first
place, we believe that (3, 7) will not be compatible with the observed forces and
symmetries of the Standard Model. Secondly, we want to leave ourselves room
for complex techniques and view a real (4, 6)R structure as holding the door
open for some models we have been playing with favoring reduction to (2, 3)C.

Lastly we must combine these choices of fiber metrics in Y with metrics
pulled up from the base space of signature (1, 3). These combinations in turn
could lead to (4, 10) or (8, 6) in the discarded former cases of (7, 3) or (3, 7),
or (5, 9) or (7, 7) in the case of the latter (4, 6) or (6, 4). We do not know how
to choose between these however as this is one of the few places in the model
where choices are made that are not yet forced.

To begin with, we will assume that the metric on Y is split with signature
(7, 7) (rather than (9, 5) which can be worked out by the interested reader) as
it is more balanced and appears to lend itself better to both some complex and
Clifford Algebra techniques.

Here the split signature Clifford algebra is of Real type and is equivalent to
Real 128 square matrices with some additional structure:

<!-- Cl7,7
∼= R(128) (3.18) -->


This in turn leads to representations for the Spin group of the form:
Spin(7, 7) −→ SO(64, 64) −→ U(64, 64) (3.19)

so in full generality, all spin representations in (7, 7) signature are subsumed by:
ρSpin : Spin(14, C) −→ U(128, C) (3.20)

The additional structure on these matrix algebras gives them a transpose
operation from combining the canonical automorphism of the Clifford algebras

(by replacing the generating tetrad with its negative) and the canonical antiautomorphism gotten from reversing the order of basis factors within the various
Clifford products.

This leads to concrete models for a number of Lie algebras at the level of Clifford Algebras as in:

<!-- so(7, 7) “ = ” Λ2 ⊂ ClR(7,7) (3.21)
gl(64, R) “ = ” (Λ2 ⊕ Λ
6 ⊕ Λ
10 ⊕ Λ
14) ⊂ ClR(7,7) (3.22) -->


As the Left and Right real Weyl spinors transform as 64-dimensional dual defining representations under the General Linear group GL(64, R), we can form a metric on the space of total Majorana Spinors

<!-- /SR = /S
L
R ⊕ /S
R
R = /S
L
R ⊕ (/S
L
R
)
∗
(3.23) -->


according to

<!-- < ψL + ψ
R, σL + σ
R >= ψ
L
(σ
R) + σ
L
(ψ
R) (3.24) -->

giving us a split signature metric in which both spaces of Weyls spinors are null
as for Weyl Spinors we have:

<!-- Structure Group

z }| {
Spin(7, 7) −→
Weyl-Left
z }| {
Gl(64, R)+ ×
Weyl-Right
z }| {
Gl(64, R)− −→
Dirac
z }| {
Gl(128, C) (3.25) -->

The metric for the total Majorana spinors corresponds to the Lie Algebra:

...

<!-- so(64, 64) “ = ” (Λ2 ⊕ Λ
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
⊂ ClR(7,7)
(3.26) -->


corresponding to the non-compact real group Spin(64, 64) ⊂ ClR(7, 7).
In order to move from Orthogonal to Unitary representations3
, we pass to
the Clifford Algebra ClC(7, 7)

<!-- u(64, 64)“ = ”M
3
i=0
Λ
4i+2 M
3
i=0
iΛ
4i M
3
i=0
Λ
4i+1 M
2
i=0
iΛ
4i+3 ⊂ ClR(7,7) ⊗ C (3.27) -->

corresponding to the Lie Group H = U(64, 64), where the ‘adjoint’ operation
in the Clifford Algebra is given by the operation of composing the canonical
automorphism with the reversal of order of all basis vectors.
By exponentiation we arrive at a unitary representation

...

<!-- ρDiracC

: Spin(7, 7) ,→ U(64, 64) (3.28) -->

of the Spin group into a space of unitary Dirac Spinors whose corresponding Lie
Algebra is in canonical correspondence with the exterior algebra inside ClC(7, 7).
3This decomposition was taken from a decades old file and should be checked by someone
more current on their “Clifford Checkerboard” yoga as it did not come with a description.

