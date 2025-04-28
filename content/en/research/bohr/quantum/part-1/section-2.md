---
heading: "Section 2"
title: "Systems of one degree of freedom"
description: "Systems of a single degree of freedom shows the simplest illustration of the principles in section 1"
weight: 8
c: "darkgoldenrod"
author: "Niels Bohr"
icon: "Niels Bohr"
---


Systems of a single degree of freedom shows the simplest illustration of the principles in section 1. 

- This lets us establish a general theory of stationary states. 
- This is due to the fact that the motion will be simply periodic, provided the distance between the parts of the system will not increase infinitely with the time. 
  - In such a case, the stationary state will no longer be stationary. 

<!-- ) P. Ehrenfest, Phys. Zeitschr. XV p. 660 (1914).  -->

The above interpretation of this relation is not stated explicitly by Ehrenfest. 

But it presents itself directly if the quantum theory is taken in the form corresponding to the fundamental assumption 1.


On account of this, the discussion of the mechanical transformability of the stationary states can, as pointed out by Ehrenfest, for systems of one degree of freedom be based on a mechanical theorem about periodic systems due to Boltzmann.

I applied this in a discussion of the bearing of mechanics on the explanation of the laws of thermodynamics.

<!-- For the sake of the considerations in the following sections it will be convenient here to  -->

I give the proof in a form which differs slightly from that given by Ehrenfest.
- It also takes regard to the modifications in the ordinary laws of mechanics claimed by Relativity.

Consider for the sake of generality a conservative mechanical system of s degrees of freedom, the motion of which is governed by Hamilton’s equations:

...

<!-- dpk
dt = −
∂E
∂qk
,
dqk
dt =
∂E
∂pk
, (k = 1, . . . , s) (4) -->

where E is the total energy considered as a function of the generalised positional coordinates q1, . . . , qs and the corresponding canonically conjugated momenta p1, . . . , ps. 

<!-- 1 ) P. Ehrenfest, loc. cit. Proc. Acad. Amsterdam, XVI, p. 591 (1914). -->

If the velocities are so small that the variation in the mass of the particles due to their velocities can be neglected, the p’s are  defined in the usual way by

<!-- pk =
∂T
∂qk
, (k = 1, . . . , s) -->

...

where T is the kinetic energy of the system considered as a function of the generalised velocities ˙q1, . . . , ˙qs

... 
<!-- q˙k =
dqk
dt  -->

and of q1, . . . , qs.

If the relativity modifications are taken into account the p’s are defined by a similar set of expressions
in which the kinetic energy is replaced by:

...
<!-- T
0 =
Xm0c
2

1 −
p
1 − v
2/c2 -->


where the summation is to be extended over all the particles of the system, and v is the velocity of one of the particles and m0 its mass for zero velocity, while c is the velocity of light. 

Let us now assume that the system performs a periodic
motion with the period σ, and let us form the expression

```elixir
I = ∫σ0 ∑s1 pkqkdt (5)
```

which is easily seen to be independent of the special choice of coordinates q1, . . . , qs used to describe the motion of the system. 

In fact, if the variation of the mass with the velocity is neglected we get

```elixir
I = 2∫σ0 Tdt
``` 

if the relativity modifications are included, we get a quite analogous expression in which the kinetic energy is replaced by

```elixir
T'' = ∑ 1/2 m0v2 √ 1-v2/c2
```


Consider next some new periodic motion of the system formed by a small variation of the first motion, but which may need the presence of external forces in order to be a mechanically possible motion. For the variation in I we get then

```elixir
δI = ∫σ0 ∑s1 (qkσpk + pkσpk) dt + ∑s1 pkqk δt|δ0
```

where the last term refers to the variation of the limit of the integral due to the variation in the period σ. By partial integration of the second term in the bracket under the integral we get next

<!-- δI =
Z σ
0
Xs
1
( ˙qk δpk − p˙k δqk) dt +
Xs
1
pk( ˙qk δt + δqk) -->



<!-- σ
0
, -->

where the last term is seen to be zero, because the term in the bracket as well as pk will be the same in both limits, since the varied motion as well as the original motion is assumed to be periodic.

By means of equations (4) we get therefore

<!-- δI =
Z σ
0
Xs
1

∂E
∂pk
δpk +
∂E
∂qk
δqk

dt =
Z σ
0
δE dt. (6) -->

