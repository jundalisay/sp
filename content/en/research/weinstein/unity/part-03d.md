---
heading: "Part 3.6"
title: "The Main Principal Bundle"
description: ""
c: "darkgoldenrod"
weight: 12
date: 2021-04-01
---


We have always found the byzantine intricacies of Clifford Algebras confusing and an attempt to recollect the various containments just discussed is offered here:

<!-- Gl(128, C)
% -
U(64, 64) GL(128, R)
- % -
O(64, 64) GL(64, R)L × GL(64, R)R
- %
Gl(64, R)
↑
Spin(7, 7)
(3.29) -->

where we are privileging one particular path up the diagram that contains the
metric and unitary representations:

<!-- Spin(7, 7) −→ SL(64, R) −→ SO(64, 64) −→ U(64, 64) −→ GL(128, C) (3.30) -->

It is now our aim to specify the main principal bundle in finite dimensions
with which we will be working.

For the rest of this exposition, we will let %Dirac = %D be the representation

<!-- %Dirac = %D : Spin(7, 7) −→ U(64, 64) (3.31) -->

on complex Dirac Spinors using the notation H = U(64, 64) in what follows.4
Our main object of focus, will be taken to be:

<!-- PH = PFr( e C7,7) ×%D H (3.32)
where PFr( e C7,7) -->

is the double cover of the frame bundle of the Chimeric bundle.

<!-- PH ←- U(64, 64)
π ↓
Y
7,7 ←- GL(4 f , R)/Spin(1, 3)
π ↓
X4
(3.33) -->

with the associated bundles:

<!-- ad = ad(PH) = PH ×ad u(64, 64) = PH ×ad h (3.34)
Ad = Ad(PH) = PH ×Ad U(64, 64) = PH ×Ad H (3.35)
/S = PH ×%D C
64,64 = PH ×%D /S (3.36) -->

4Note: The symbol H is being used to denote two different objects. A group and a horizontal vector space. This is unfortunate and may be rectified in future drafts.

Now the important thing to notice about this construction is that while it looks
geometric in nature due to the presence of Spin groups and representations, it
is in fact purely Topological as no metric has been chosen. In fact, all that has
been chosen is the signature of a (1, 3)-metric and one can avoid even this by
working over all 5 distinct sectors {(i, 4 − i)}

i=0 on X4 and merely noting that

we happen to appear to exist within one of them carrying a Lorentz signature
by anthropic reasoning.

We may fairly ask what a topological /S(CY ) Spinor looks like when ‘observed’ from X4. The concept of an observation is of course built into the definition of the Observerse as a map ι observing Y from X via pullback.

<!-- ι : U −→ Y U ⊂ X4
(3.37) -->

and so here is naturally given by a section over a local neighborhood U ⊂ X
when Y fibers over X. Thus we have:

<!-- /SPH ←- C
64,64
π ↓
Y
7,7 ←- GL(4 f , R)/Spin(1, 3)
π ↓↑ ιU
U
4
(3.38) -->


where the key to understanding the topological spinors from the perspective of
U ⊂ X observing Y via ι is worth disentangling due to the multiplicity of roles
played by ιU .

In the first place ιU is a local immersion as well as a section so it constitutes
an embedding of X into Y seen as an ambient space. As such, it pulls back
all bundles over Y just as it pushes forward the tangent bundle of U ⊂ X
in non-degenerate fashion. When it pulls back the Tangent Bundle T Y as an
embedding, it splits via:

<!-- (T Y ) = T U ⊕ Nι = T U ⊕ T Y /ι∗(T U) (3.39) -->

where Nι
is the normal bundle of the observation. But the act of observation
also gives a splitting of the long exact sequence from before over U ⊂ X:

<!-- . . .  T  T
∗  T  T
∗  . . . (3.40) -->

Including this splitting into the earlier large commutative diagram

<!-- ↓ ↑ ↓ ↑
. . . ↔ V V ∗ ↔ V V ∗ ↔ . . .
↓ ↑ ↓ ↑
. . .  T  T
∗  T  T
∗  . . .
↓ ↑ ↓ ↑
. . . H ↔ H∗ H ↔ H∗
. . .
↓ ↑ ↓ ↑
0 0 0 0
(3.41) -->

we start to see the full effect of a choice of ι, as it simultaneously plays the following roles:

• Observer as a generator of pullback data via ι
• Ambient Embedding generating a Normal Bundle Nι
• (Downstairs) Metric as a section of the bundle of metrics.
• Splitting of the long repeating sequence.
• Connection as can be seen as being determined via either the Zorro
diagram, the Levi-Civita Construction, or the splitting diagram above.
• (Upstairs) Metric Via the Zorro diagram.
• Isomorphism generator:

<!-- C = C
∗ = T Y = T
∗Y V = V
∗ = Nι = N
∗
ι H = H∗ = T X = T
∗X
(3.42) -->

so that its introduction has a fairly violent effect in moving us from topology to true geometry. Curiously, it is the only primary field in the theory that is truly native to X.

As such we will use Hebrew letters gimel (ג (and aleph ℵ and denote our immersion ι in the Einsteinian Observerse by ι = ג and its associated connections by ℵג to remind ourselves of the separation between fields native to X and those arising naturally on Y .

