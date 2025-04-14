---
heading: Section 4
title: "Wilson Lines and Wilson Loops"
description: "In the language of mathematics, gauge theory is an example of a fibre bundle"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 8
---


## 2.1.3 Wilson Lines and Wilson Loops

It is a maxim in physics, one that leads to much rapture, that “gravity is geometry”.

But the same is equally true of all the forces of Nature since gauge theory is rooted in geometry.

In the language of mathematics, gauge theory is an example of a fibre bundle, and the gauge field Aμ is referred to as a connection.

We met the idea of connections in general relativity. 

There, the Levi-Civita connection ⇢μ⌫ tells us how to parallel transport vectors around a manifold. 

The Yang-Mills connection Aμ plays the same role, but now for the appropriate “electric charge”. 

First, we need to explain what this appropriate charge is. 

Throughout this section, we will consider a fixed background Yang-Mills fields Aμ (x).

In this background, we place a test particle. The test particle is going to be under our control: we’re holding it and we get to choose how it moves and where it goes. 

But the test particle will carry an internal degree of freedom – this is the “electric charge” – and the evolution of this internal degree of freedom is determined by the background Yang-Mills field.

This internal degree of freedom sits in some representation R of the Lie group G. 

To start with, we will think of the particle as carrying a complex vector, w, of fixed length,
wi i = 1, . . . dim R

such that w† w = constant

In analogy with QCD, we will refer to the electrically charged particles as quarks, and to wi as the colour degree of freedom. The wi is sometimes called chromoelectric charge.

As the particle moves around the manifold, the connection Aμ (or, to dress it with all its indices, (Aμ )ij = Aaμ (T a )ij ) tells this vector w how to rotate. 

In Maxwell theory, this “parallel transport” is nothing more than the Aharonov-Bohm effect that we discussed in Section 1.1. Upon being transported around a closed loop C, a particle returns
H
with a phase given by exp i C A. 

We’d like to write down the generalisation of this formula for non-Abelian gauge theory. 

For a particle moving with worldline xμ (⌧ ), the rotation of the internal vector w is governed by the parallel transport equation

```
i dw dxμ = Aμ (x)w d⌧ d⌧
```

(2.13)

The factor of i ensues that, with Aμ Hermitian, the length of the vector w† w remains constant. Suppose that the particle moves along a curve C, starting at xμi = xμ (⌧i ) and finishing at xμf = xμ (⌧f ). Then the rotation of the vector depends on both the starting
and end points, as well as the path between them,

```
w(⌧f ) = U [xi , xf ; C]w(⌧i )
```

where

```
✓ Z ⌧f
◆
✓ Z xf ◆
dxμ
U [xi , xf ; C] = P exp i
d⌧
Aμ (x(⌧ )) = P exp i
A
d⌧
⌧i
xi
```

(2.14)
where P stands for path ordering. It means that when expanding the exponential, we order the matrices Aμ (x(⌧ )) so that those at earlier times are placed to the left. (We met this notation previously in the lectures on quantum field theory when discussing Dyson’s formula and you can find more explanation there.) 

The object U [xi , xf ; C] is referred to as the Wilson line. Under a gauge transformation ⌦(x), it changes as
U [xi , xf ; C] ! ⌦(xi )U [xi , xf ; C] ⌦† (xf )
If we take the particle on a closed path C, this object tells us how the vector w differs from its starting value. 

In mathematics, this notion is called holonomy. 

In this case, we can form a gauge invariant object known as the Wilson loop,

```
✓ I ◆
W [C] = tr P exp i A
```

(2.15)

The Wilson loop W [C] depends on the representation R of the gauge field, and its value along the path C. This will play an important role in Section 2.5 when we describe ways to test for confinement.

