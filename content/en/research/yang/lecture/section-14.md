---
heading: Section 14
title: "General Instanton Solutions"
description: "To get an instanton solution in SU (N ), we could take the SU (2) solution"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 28
---


To get an instanton solution in SU (N ), we could take the SU (2) solution (2.51) and simply embed it in the upper left-hand corner of an N ⇥ N matrix. 

We can then rotate this into other embeddings by acting with SU (N ), modulo the stabilizer which leaves
the configuration untouched. This leaves us with the action

```
SU (N )
S[U (N 2) ⇥ U (2)]
```

where the U (N 2) hits the lower-right-hand corner and doesn’t see our solution, while the U (2) is included in the denominator because it acts like V in the original solution (2.51) and we don’t want to over count. 

The notation S[U (p) ⇥ U (q)] means that we lose the overall central U (1) ⇢ U (p) ⇥ U (q). 

The coset space above has dimension 4N 8. This means that the solution in which (2.51) is embedded into SU (N ) comes with 4N collective coordinate. This is the most general ⌫ = 1 instanton solution in SU (N ).

What about solutions with higher ⌫? There is a beautiful story here. It turns out that such solutions exist and have 4N ⌫ collective coordinates. 

Among these solutions are configurations which look like ⌫ well separated instantons, each with 4N collec-
tive coordinates describing its position, scale size and orientation. 

However, as the instantons overlap this interpretation breaks down.

<!-- – 55 –V(x)
V(x)
x
x -->

Figure 8: The double well

Figure 9: The upside down double well

Remarkably, there is a procedure to generate all solutions for general ⌫. It turns out that one can reduce the non-linear partial differential equations (2.49) to a straightforward algebraic equation. 

This is known as the ADHM construction and is possible due to some deep integrable properties of the self-dual Yang-Mills equations. 

<!-- You can read more about this construction (from the perspective of D-branes and string theory) in
the lectures on Solitons. -->

## 2.3.2 Tunnelling: Another Quantum Mechanics Analogy

We’ve found solutions in Euclidean spacetime that contribute to the theta dependence in the path integral. 

But why Euclidean rather than Lorentzian spacetime? The answer is that solutions to the Euclidean equations of motion describe quantum tunnelling.

This is best illustrated by a simple quantum mechanical example. Consider the double well potential shown in the left-hand figure. 

Clearly there are two classical ground states, corresponding to the two minima. But we know that a quantum particle sitting in one minimum can happily tunnel through to the other. 

The end result is that the quantum theory has just a single ground state. 

How can we see this behaviour in the path integral? 

There are no classical solutions to the equations of motion which take us from one minimum to the other. However, things are rather different in Euclidean time. We define ⌧ = it

After this Wick rotation, the action

<!-- ✓ ◆2
Z
m dx
S[x(t)] = dt
2 dt
V (x)
turns into the Euclidean action
SE [x(⌧ )] =
iS =
Z
m
d⌧
2
– 56 –
✓
dx
d⌧
◆2
+ V (x) -->

We see that the Wick rotation has the effect of inverting the potential: V (x) ! V (x).

In Euclidean time, the classical ground states correspond to the maxima of the inverted potential. But now there is a perfectly good solution to the equations of motion, in which we roll from one maximum to the other. 

We come to a rather surprising conclusion: quantum tunnelling can be viewed as classical motion in imaginary time! 

As an example, consider the quartic potential

<!-- V (x) = (x2
a2 ) 2
(2.52) -->

which has minima at x = ±a. Then a solution to the equations of motion which interpolates between the two ground states in Euclidean time is given by

<!-- ⇣!
⌘
x̄(⌧ ) = a tanh
(⌧ ⌧0 )
(2.53)
2 -->
with ! 2 = 8 a2 /m. 

This solution is the instanton for quantum mechanics in the double well potential. 

There is also an anti-instanton solution that interpolates from x = +a to x = a. 

The (anti)-instanton solution is localised in a region 1/! in imaginary time.

In this case, there is just a single collective coordinate, ⌧0 , whose existence follows from time translational invariance of the quantum mechanics.

Returning to Yang-Mills, we now seek a similar tunnelling interpretation for the instanton solutions. In the semi-classical approximation, the instantons tunnel between the |ni vacua that we described in Section 2.2.3. 

Recall that the semi-classical vacuum is defined by Ai = iV @i V 1 on a spatial slice R3 , which we subsequently compactify to S3. 

The vacuum |ni is associated to maps V (x) : S3 7! G with winding n, defined in (2.36).

We noted previously that the construction of the vacua |ni in terms of winding relies on topological arguments which are similar to those which underlie the existence of instantons. 

To see the connection, we can take the definition of the instanton winding (2.47) and deform the integration region from the asymptotic S31 = @R4 to the two asympotic three spheres S3± which we think of as the compactified R3± spatial slices ar t = ±1. 

We can then compare the instanton winding (2.47) to the definition of the vacuum states (2.36), to write

<!-- ⌫(U ) = n+ (U )
n+> -->

instanton with winding ν
n −>

Figure 10:
n (U )

We learn that the Yang-Mills instanton describes tunnelling between the two semi-classical vacua, |n i ! |n+ i = |n + ⌫i, as shown in the figure.
