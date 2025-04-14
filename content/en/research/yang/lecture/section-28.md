---
heading: Section 28
title: "Hooft Lines in Yang-Mills"
description: "What’s the analogous object in Yang-Mills theory with gauge group G?"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 56
---


## ’t Hooft Lines in Yang-Mills

What’s the analogous object in Yang-Mills theory with gauge group G?

To explain the generalisation of Dirac quantisation to an arbitrary, semi-simple Lie group we need to invoke a little bit of Lie algebra-ology that was covered in the Symmetries and Particles course.

We work with a Lie algebra g. We denote the Cartan sub-algebra as H ⇢ g. Recall that this is a set of r mutually commuting generators, where r is the rank of the Lie algebra. 

Throughout the rest of this section, bold (and not silly gothic) font will denote an r-dimensional vector.
We again define a ’t Hooft line for a timelike curve C sitting at the origin. We will require that the magnetic field B i , i = 1, 2, 3, takes the form

<!-- Bi !
xi
Q(x) as r ! 0
4⇡r3 -->

where Q(x) is a Lie algebra valued object which specifies the magnetic charge of the ’t Hooft line. Spherical symmetry requires that Q(x) be covariantly constant. 

We can again cover the S2 with two charts, and in each pick Q(x) to be a constant which, by a suitable gauge transformation, we take to sit in the Cartan subalgebra. 

We write Q=m·H for some r-dimensional vector m which determines the magnetic charge. We can think of this as r Dirac monopoles, embedded in the Cartan subalgebra. 

The requirement that the ’t Hooft lines are consistent in the presence of Wilson lines
gives the generalised Dirac quantisation condition,
<!-- exp (im · H) = 1
(2.78) -->

The twist is that this must hold for all representations of the Lie algebra. To see why this requirement affects the allowed magnetic charges, consider the case of G = SU (2).

We can pick a U (1) ⇢ SU (2) in which we embed a Dirac monopole of charge m. The W-bosons have electric charge q = ±1 and are consistent with a ’t Hooft line of charge m = 2⇡. 

However, our ’t Hooft line should also be consistent with the insertion of a Wilson line in the fundamental representation, and this carries charge q = ±1/2. This means that, for G = SU (2), the ’t Hooft line must carry m = 2, twice the charge of the simplest Dirac monopole.

To extend this to a general group and representation, we need the concept of weights.

Given a d dimensional representation, |μa i with a = 1, . . . , d of g, we may introduce a set of weights, which are the eigenvalues 
<!-- H|μa i = μa |μa i
(2.79) -->

All such weights span the weight lattice ⇤w (g).
The weights of the adjoint representation are special and are referred to as roots.

Recall that these roots ff can be used to label the other generators of the Lie algebra, which are denoted as Eff . In the adjoint representation, the eigenvalue condition (2.79) becomes the commutation relation [H, Eff ] = ffEff . Importantly, the roots also span
a lattice ⇤root (g) ⇢ ⇤w (g)

The weights and roots have the property that
ff·μ 1
2 Z
ff2
2
for all μ 2 ⇤w (g) and ff 2 ⇤root (g). This is exactly what we need to solve the Dirac quantisation condition (2.78), which becomes m · μ 2 2⇡Z for all μ 2 ⇤w (g). 

We define the co-root
<!-- 2ff
ff_ = 2
ff -->

These co-roots also span a lattice, which we call ⇤co root (g). Clearly, we have ff_ ·μ 2 Z for all ff_ 2 ⇤co root (g) and μ 2 ⇤w (g). 

If the magnetic charge vector sits in the co-root lattice, then the Dirac quantisation condition is obeyed. More generally, it turns out
that for simply connected groups we have
m 2 2⇡ ⇤co root (g)
(2.80)

This is sometimes referred to as the Goddard-Nuyts-Olive (or GNO) quantisation condition. We will look at the possible magnetic charges for non-simply connected groups shortly.

There is one last part of this story. The co-root lattice can be viewed as the root lattice for a Lie algebra g_ , so that ⇤co root (g) = ⇤root (g_ ) For simply laced algebras (these are the ADE series, and so includes su(N )), all roots have the same length and
are normalised to ff2 = 2. In this case, the roots and co-roots are the same and g_ = g.

For non-simply laced groups, the long and short roots get exchanged. This means that, for example, so(2N + 1)_ = sp(N ) and sp(N )_ = so(2n + 1).

## 2.6.2 SU (N ) vs SU (N )/ZN

There seems to be something of an imbalance between the Wilson line operators and the ’t Hooft line operators. 

These electric and magnetic probes are defined in rather different ways, but that’s not our concern. 

Instead, it’s slightly disconcerting that there are more Wilson line operators than ’t Hooft line operators. This is because Wilson line operators are labelled by representations R which, in turn, are associated to elements of the weight lattice ⇤w (g). 

In contrast, ’t Hooft lines are labelled by elements of ⇤root (g_ ) which is a subset of ⇤w (g_ ). Roughly speaking, this means that Wilson lines can sit in any representation, including the fundamental, while ’t Hooft lines can only sit in representations that arise from tensor products of the adjoint. Why?

To better understand the allowed magnetic probes, we need to look more closely at the global topology of the gauge group. 

We will focus on pure Yang-Mills with
G = SU (N ). Because the gauge bosons live in the adjoint representation, they are blind to any transformation which sits in the centre ZN ⇢ SU (N ),

<!-- n
o
ZN = e2⇡ikN , k = 0, 1, . . . , N 1 -->

The gauge bosons do not transform under this centre ZN subgroup. In the older literature, it is sometimes claimed that the correct gauge group of Yang-Mills is actually SU (N )/ZN.

But this is a bit too fast. In fact, the right way to proceed is to understand that there are two different Yang-Mills theories, defined by the choice of gauge group G = SU (N ) or G = SU (N )/ZN

More generally we have a different theory with gauge group G = SU (N )/Zp for any Zp subgroup of ZN . The difference between these theories is rather subtle. 

We can’t distinguish them by looking at the action, since this depends only on the shared su(N ) Lie algebra. 

Moreover, this means that the correlation functions of all local operators are the same in the two theories so you don’t get to tell the difference by doing any local experiments. 

Nonetheless, different they are. The first place this shows up is in the kinds of operators that we can use to probe the theory.
<!-- Zm
Zm
Ze
Ze -->

Figure 21: The figure on the left shows that allowed Wilson and ’t Hooft lines (in green) for the gauge group SU (3). 

The figure on the right shows the allowed lines for gauge group SU (3)/Z3.

Let’s start with the Wilson lines. As we saw in Section 2.5, these are labelled by a representation of the group. 

The representations of G = SU (N )/ZN are a subset of those of G = SU (N ); any representation that transforms non-trivially under ZN is prohibited. 

This limits the allowed Wilson lines. In particular, the theory with G = SU (N )/ZN does not admit the Wilson line in the fundamental representation,
but Wilson lines in the adjoint representation are allowed. 

Similarly, the theory with gauge group G = SU (N )/ZN cannot be coupled to fundamental matter; it can be coupled to adjoint matter.

This has a nice description in terms of the lattices that we introduced. 

For G = SU (N ), the representations are labelled by the weight lattice ⇤w (g). (The precise statement is that there is a one-to-one correspondence between representations and ⇤w (g)/W where W is the Weyl group.) However, for G = SU (N )/ZN , the representations are labelled by the root lattice ⇤root (g). 

The difference between the weight and root lattice for g = su(N ) is precisely the centre,
⇤w (g)/⇤root (g) = ZN

We come to the ’t Hooft lines. When we introduced ’t Hooft lines in the previous section, we were implicitly working with the universal cover of the gauge group, so that all possible Wilson lines were allowed. 

The requirement that magnetic charges are compatible with all representations and, in particular, the fundamental representation, resulted in the GNO condition (2.80) in which ’t Hooft lines are labelled by ⇤root (g).

But what if we work with G = SU (N )/ZN ? Now we have fewer Wilson lines, and so the demands of Dirac quantisation are less onerous. 

Correspondingly, in this theory the ’t Hooft lines are labelled by ⇤w (g).

We can summarise the situation by labelling any line operator by a pair of integers

<!-- (z e , z m ) 2 ZeN ⇥ Zm
N
(2.81) -->

These describe how a given line operator transforms under the electric and magnetic
centres of the group. If we have two line operators, labelled by (z e , z m ) and (z 0 e , z 0 m )
then Dirac quantisation requires z e z 0 m z m z 0 e = 0 mod N. 

Note the similarity with
the quantisation condition on dyons (1.4) that we met earlier.

For gauge group G = SU (N ), the line operators are labelled by (z e , 0) with z e =
0, . . . , N 1. Note that this doesn’t mean that there are no magnetically charged ’t
Hooft lines: just that these lines sit in the root lattice and so have z m = 0 mod N .
In contrast, for G = SU (N )/ZN the line operators are labelled by (0, z m ) with
z m = 0, . . . , N 1. This time the Wilson lines must transform trivially under the
centre of the group, so z e = 0 mod N . The resulting line operators for G = SU (3) and
G = SU (3)/Z3 are shown in Figure 21. Yang-Mills with G = SU (N ) has more Wilson lines; Yang-Mills with G = SU (N )/ZN has more ’t Hooft lines.

There is a slightly more sophisticated way of describing these different line operators using the idea of generalised symmetries. We postpone this discussion until Section 3.6 where we will find an application in discrete anomalies.

