---
heading: "Section 3"
title: "Converse in the case of the finite group."
weight: 16
author: Noether
description: "We shall deal with variational problems that admit a continuous group (in the Lie sense)"
c: "firebrick"
---



In order to show the converse, one must essentially follow through the foregoing
argument in the opposite sequence. The validity of (12) follows from the validity of (13)
upon multiplication by ε and addition, and by means of the identity (3), this implies a
relation: δ f + Div(A – B) = 0. If one then sets: ∆x = 1/f ⋅ (A – B) then one arrives at (11)
as a result of this. 

From this, (7) finally follows by integration: ∆I = 0, and thus the
invariance of I under the infinitesimal transformation that is determined by ∆x, ∆u, where
the ∆u is to be determined from ∆x and δ u by means of (9), and ∆x and ∆u become
linear in the parameters. However, ∆I = 0 implies, in a well-known way, the invariance
of I under the finite transformations that arise by integrating the simultaneous system:

<!-- (17)
dxi
= ∆xi,
dt
dui
= ∆ui
dt
 xi = y

for t = 0  .

 ui = vi
 -->


These finite transformations include ρ parameters a1, ..., aρ, namely, the couplings
tε1, ..., tερ . From the assumption that there should be ρ and only ρ linearly independent
divergence relations (13), it follows moreover that the finite transformations always
define a group, as long as they do not include the derivatives ∂u / ∂x. In the opposite case
− namely, at least one infinitesimal transformation arises from the Lie bracket process −
there would be no linear coupling of the ρ remaining divergence relations, and since I
also admits this transformation, there would be more than ρ linearly independent divergence relations, or else this infinitesimal transformation would be of the special form in which δ u = 0, Div(f ⋅ ∆x) = 0, but then ∆x or ∆u would depend upon derivatives, contrary to assumption. 

Whether or not this case can occur when derivatives appear in
∆x or ∆u must remain undecided. One then adds all functions ∆x for which Div(f ⋅ ∆x) =
0 to the ∆x that was determined above in order to once more preserve the group property.
By convention, the parameters that are thus added shall not, however, be counted. The
converse is thus proved.

From this converse, it then follows that, in fact, ∆x and ∆u can be assumed to be
linear in the parameters. Namely, if ∆u and ∆x were of higher degree in ε then, due to the
linear independence of the products of powers of ε, entirely analogous relations to (18)
would follow, only in a greater number, from which, by the converse, one infers the
invariance of I under a group whose infinitesimal transformations include the parameters
linearly. Should this group contain precisely ρ parameters, then there would have to exist
linear dependencies between the original divergence relations due to the terms of higher
order in ε.


Let it be remarked that in the case where ∆x and ∆u also contain derivatives of the u
the finite transformations can depend upon infinitely many derivatives of the u. In this
 ∂u 
d 2 xi d 2ui
case, the integration of (17) then leads from the determination of

<!-- to ∆ 

2
2
dt
dt
 ∂xκ 
∂∆u
∂u ∂∆uλ
−∑ -->

, such that the number of derivatives of u generally increases at

<!-- =
∂xκ
κ ∂xλ ∂xκ -->

each step. Perhaps the following will serve as an example:

...

<!-- f = 12 u′2 ,
ψ = − u′′,
∆x =
−2u
ε,
u ′λ
ψ⋅x=
d
(u − u′x),
dx
δ u = x ⋅ ε,
2u 

∆u =  x −  ⋅ ε .
u′ 

 -->

Since the Lagrangian expression of a divergence vanishes identically, the converse
ultimately shows the following: If I admits a Gρ then any integral that differs from I only
by a boundary integral – i.e., an integral of a divergence – will likewise admit a Gρ with
the same δ u , whose infinitesimal transformation will generally contain derivatives of the

...
<!-- d  u 2  

u.  -->

Thus, perhaps referring to the example above, f* = 12 u ′2 −    admits the

....
<!-- dx  x  
 -->


infinitesimal transformation ∆u = xε, ∆x = 0, while derivatives of the u appear in the
infinitesimal transformations that correspond to f.Noether – Invariant variational problems

If one goes on to the variational problem − i.e., if one sets ψi = 0 1) − then (18) goes
to the equations: Div B(λ) = 0, ..., Div B(ρ) = 0, which are often referred to as
“conservation laws.” In the one-dimensional case, it follows from this that B(1) = const.,
..., B(ρ) = const., and therefore the B contain at most (2κ – 1)th derivatives of the u (from
(6)), as long as ∆u and ∆x include no higher derivatives than κth that appear in f. Since
2κth derivatives appear in ψ, in general 2), one thus has the existence of ρ first integrals.
The f above once more shows that nonlinear dependencies can exist between them. The
linearly independent ∆u = ε1, ∆x = ε2 correspond to the linearly independent relations: u′′

<!-- d
1 d
=
u′ , u′′⋅⋅ u′ =
(u′)2 ,  -->

while a nonlinear dependency exists between the first

....

integrals u′ = const., u′2 = const. Thus, one is dealing with the elementary case in which
∆u, ∆x contain no derivatives of the u 3).


