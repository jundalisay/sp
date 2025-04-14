---
heading: Section 1
title: "Lie Groups and Lie Algebra"
description: "Lie Groups and Lie Algebra are basics of Yang Mills Theory"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 2
---


Pure electromagnetism is a free theory of a massless spin 1 field. 

Yang-Mills is a subtle theory of spin 1 fields built on the mathematical topology of Lie groups which include theta angle and instantons.

Yang-Mills is a strongly coupled quantum field theory which has low-energy dynamics, making it very different from the classical theory. 

It underlies the Standard Model of particle physics, describing both the weak and the strong forces. 

Quantum Chromodynamics is the theory of the strong force, and is the language that we will use.


## Lie Groups and Lie Algebra 

A compact Lie group G has an underlying Lie algebra g, whose generators T a satisfy 

```
[T a , T b ] = if abc T c
```

Here `a, b, c = 1, . . . , dim G and f abc` are the fully anti-symmetric structure constants.

The factor of i on the right-hand side is taken to ensure that the generators are Hermitian: `(T a )† = T a .`

The compact, simple Lie group G has a finite classification.

The possible options for the group G, together with the dimension of G and the dimension of the fundamental (or minimal) representation F , are given by

G | dim G | dim F
--- | --- | ---
SU (N) | N2-1 | N
SO(N)1 | 1/2N(N-1) | N
Sp(N) | N(2N + 1) | 2N
E6 | 78 | 27
E7 | 133 | 56
E8 | 248 | 248
F4 | 52 | 6
G2 | 14 | 7

we use the convention Sp(1) = SU (2). (Other authors sometimes write Sp(2n), or even U Sp(2n) to refer to what we’ve called Sp(N ), preferring the argument
to refer to the dimension of F rather than the rank of the Lie algebra g.)

We will frequently turn to G = SU (N ). 

We will also consider G = U (1), in which case Yang-Mills theory reduces to Maxwell theory.

We will need to normalise our Lie algebra generators. We require that the generators in the fundamental (i.e. minimal) representation F satisfy:

tr T a T b = 1/2 dab

(2.2)

We use Ta to refer to the fundamental representation, and will refer to generators in other representations R as T a (R). 

Note that, having fixed the normalisation (2.2) in the fundamental representation, other T a (R) will have different normalisations. 

For each element of the algebra, we introduce a gauge field Aaμ . These are then packaged into the Lie-algebra valued gauge potential:

```
Aμ = Aaμ T a
```

(2.3)

This is a rather abstract object, taking values in a Lie algebra. For G = SU(N), a more down to earth perspective is to view Aμ simply as a traceless N ⇥ N Hermitian matrix.

We will refer to the fields Aaμ collectively as gluons, in deference to the fact that the strong nuclear force is described by G = SU (3) Yang-Mills theory. 

From the gauge potential, we construct the Lie-algebra valued field strength 

Fμ⌫ = @μ A⌫ - @⌫ Aμ - i[Aμ , A⌫ ]

(2.4)

Since this is valued in the Lie algebra, we could also expand it as Fμ⌫ = Fμ⌫ T a . 

In more mathematical terminology, Aμ is called a connection and the field strength Fμ⌫ is referred to as the curvature. We’ll see what exactly the connection connects in Section 2.1.3.

Matter fields live in some representation R of the gauge group G. This means that they sit in some vector
of dimension dim R. Much of our focus will be on matter fields in the fundamental representation of G = SU (N ), in which case is an N -dimensional complex vector.

The matter fields couple to the gauge fields through a covariant derivative, defined by

Dμ = @ μ iAμ (2.5)

