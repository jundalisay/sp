---
heading: Section 22
title: "Non-Abelian Coulomb Force"
description: "The group theory machinations above tell us that the operator T a (R1 )T a (R2 ) decomposes into a block diagonal matrix"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 44
---


## Non-Abelian Coulomb Force

<!-- C(
)=
and C(adj) = N
(N -->

Let’s now apply this to the force between quarks. 

The group theory machinations above tell us that the operator T a (R1 )T a (R2 ) decomposes into a block diagonal matrix, with entries labelled by the irreducible representations R ⇢ R1 ⌦ R2 and given by

<!-- 1
T a (R1 )T a (R2 ) = [C(R) C(R1 ) C(R2 )]
2
R -->

The quark and anti-quark can sit in two different irreducible representations: the singlet and the adjoint (2.65). For the singlet, we have

<!-- ⇤
1⇥
N2 1
C(1) C(N) C(N̄) =
2
2N -->

The minus sign ensures that the force between the quark and anti-quark in the singlet channel is attractive. This is what we would have expected from our classical intuition.

However, when the quarks sit in the adjoint channel, we have

<!-- ⇤
1⇥
1
C(adj) C(N) C(N̄) =
2
2N -->

Perhaps surprisingly, this is a repulsive force.
The group theory analysis above makes it simple to compute the classical force between quarks in any representation. Suppose, for example, we have two quarks, both in the fundamental representation. 

They decompose as


<!-- N⌦N=
where dim(
) = 12 N (N + 1) and dim(
1
[C (
2
)
C(N)
) = 12 N (N
C(N)] =
and
1). We then have
N 1
2N
i
1h ⇣ ⌘
N +1
C
C(N) C(N) =
2
2N -->


and the force is repulsive between quarks in the symmetric channel, but attractive in
the anti-symmetric channel.


Even classically, Yang-Mills theory provides a somewhat richer structure to the forces between particles. 

However, at the classical level, Yang-Mills retains the familiar 1/r fall-off from Maxwell theory. This is the signature of a force due to the exchange of massless particles in d = 3+1 dimensions, whether photons or gravitons or, in this case, gluons. 

At the quantum level things are very different. 


## The Confining Force

In the previous section, we stated (but didn’t prove!) that Yang-Mills has a mass gap. 

This means that, at distances 1/⇤QCD , the force will be due to the exchange of massive particles rather than massless particles. 

In many situations, the exchange of massive particles results in an exponentially suppressed Yukawa force, of the form V (r) ⇠ e mr /r, and you might have reasonably thought this would be the case for Yang-Mills. 

You would have been wrong.

Let’s again consider a quark and an anti-quark, in the N and N̄ representations respectively. The energy between the two turns out to grow linearly with distance

<!-- V (r) = r -->

(2.67)
for some value that has dimensions of energy per length. 

It is often referred to as the string tension. 

On dimensional grounds, we must have ⇠ ⇤2QCD since there is no other scale in the game.

For 2 quarks, the result is even more dramatic. Now the tensor product of the 2 representations does not include a singlet (at least this is true for SU (N ) with N 3).

The energy between the two quarks turns out to be infinite. This is a general property of quantum Yang-Mills: the only finite energy states are gauge singlets. 

The theory is confining: an individual quark cannot survive on its own, but is forced to
enjoy the company of friends.

There is a possibility for confusion in the the claim that only singlet states survive in a confining gauge theory. 

In any gauge theory, one should only talk about gauge invariant states and a single quark is not a gauge invariant object. 

However, we can render the quark gauge invariant by attaching a Wilson line (2.14) which stretches
from the position of the quark to infinity. 

When we blithely talk about a single quark, we should really be thinking of this composite object. This is not directly related to the issue of confinement.

The statements above hold equally well for electrons in QED: these too are only gauge invariant when  attached to a Wilson line. 

Instead, the issue of confinement is a dynamical statement, rather than a kinematical one.

Confinement means that the quark + Wilson line costs infinite energy in Yang-Mills, while the electron + Wilson line (suitably regulated) costs finite energy in QED.

There are situations where it’s not possible to form a singlet from a pair of particles, but it is possible if enough particles are added. The baryon provides a good example, in which N quarks, each in the fundamental representation of SU (N ), combine to form a singlet B = ✏i1 ...iN qi1 . . . qiN . These too are finite energy states.

Confinement in Yang-Mills is, like the mass gap, a challenging problem. There is no analytic demonstration of this phenomenon. Instead, we will focus on building some intuition for why this might occur and understanding the right language to describe it.


