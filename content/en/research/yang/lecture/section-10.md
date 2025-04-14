---
heading: Section 10
title: "The Chern-Simons Functional is not Gauge Invariant!"
description: "The Chern-Simons functional is not  gauge invariant. But it only changes under topologically non-trivial gauge transformations"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 20
---


We now see the relevance of these topologically non-trivial gauge transformations.

Dropping the boundary term, the transformation of the Chern-Simons functional is
W [A] ! W [A] + n

We learn that the Chern-Simons functional is not quite gauge invariant. But it only changes under topologically non-trivial gauge transformations, where it shifts by an integer.

What does this mean for our wavefunctions? We will require that our wavefunctions are gauge invariant, so that (A0 ) = (A) with A0 = ⌦A⌦ 1 + i⌦r⌦ 1. 

However, we see the problem with our dressing argument. 

Suppose that we find a wavefunction 0 (A) which is a state when ✓ = 0 and is gauge invariant. Then the
dressed wavefunction 

<!-- (A) = ei✓ W [A]
0 (A)

(2.38) -->

will indeed solve the Schrödinger equation for general ✓. 

But it is not gauge invariant:

instead it transforms as (A0 ) = ei✓n (A).

This then, is the way that the ✓ angle shows up in the states. We do require that (A) is gauge invariant which means that it’s not enough to simply dress the ✓ = 0
wavefunctions 0 (A) with the Chern-Simons functional ei✓W [A].

Instead, if we want to go down this path, we must solve the ✓ = 0 Schrödinger equation with the requirement that 0 (A0 ) = e i✓n 0 (A), so that this cancels the additional phase coming from the
dressing factor so that (A) is gauge invariant.


There is one last point: the value of ✓ only arises in the phase ei✓n with n 2 Z. 

This, is the origin of the statement of that ✓ is periodic mod 2⇡. We take ✓ 2 [0, 2⇡).

We have understood that the spectrum does depend on ✓. 

But we have not understood how the spectrum depends on ✓. That is much harder. 

We will not have anything to say here, but will return to this a number of times in these lectures, both
in Section 2.3 where we discuss instantons and in Section 6 when we discuss the large N expansion.

## 2.2.3 Analogies From Quantum Mechanics

There’s an analogy that exhibits some (but not all) of the ideas above in a much simpler setting. 

Consider a particle of unit charge, restricted to move on a circle of radius R.

Through the middle of the circle we thread a magnetic flux.

Because the particle sits away from the magnetic field, its classical motion is unaffected by the flux.

Nonetheless, the quantum spectrum does depend on the flux and this arises for reasons very similar
to those described above.

Let’s recall how this works. The Hamiltonian for the particle is

<!-- ✓
◆2
1
@
H=
i
+
2m
@x 2⇡R  -->

We can now follow our previous train of logic. Suppose that we found a state 0 which is an eigenstate of the Hamiltonian when = 0. 

We might think that we could then just write down the new state = e i x/2⇡R 0 which is an eigenstate of the
Hamiltonian for non-zero. 

However, as in the Yang-Mills case above, this is too
quick. For our particle on a circle, it’s not large gauge transformations that we have to worry about; instead, it’s simply the requirement that the wavefunction is single valued. 

The dressing factor ei x/2⇡R is only single valued if is a multiple of 2⇡.

Of course, the particle moving on a circle is much simpler than Yang-Mills. There is no difficulty in just solving it explicitly. 

The single-valued wavefunctions have the property that they are actually independent of . (There is no reason to believe that this property also holds for Yang-Mills.) 

They are
<!-- 1
=p
einx/R n 2 Z
2⇡R -->

These solve the Schrödinger equation H = E with energy

<!-- ✓
◆2
1
E=
n+
n2Z
(2.39)
2mR2
2⇡ -->

We see that the spectrum of the theory does depend on the flux , even though the particle never goes near the region with magnetic field. 

Moreover, as far as the particle is concerned, the flux is a periodic variable, with periodicity 2⇡. In particular, if is an integer multiple of 2⇡, then the spectrum of the theory is unaffected by the flux.

