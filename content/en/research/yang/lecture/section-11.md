---
heading: Section 11
title: "The Theta Angle as a “Hidden” Parameter"
description: "Why should we insist that the wavefunction is single-valued?"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 22
---


There is an alternative way to view the problem of the particle moving on a circle. We explain this here before returning to Yang-Mills where we offer the same viewpoint.

This new way of looking at things starts with a question: why should we insist that the wavefunction is single-valued? 

After all, we only measure probability | |2 , which cares nothing for the phase. Does this mean that it’s consistent to work with wavefunctions that are not single-valued around the circle?

The answer to this question is “yes”. Let’s see how it works. Consider the Hamiltonian for a free particle on a circle of radius R, 

<!-- H=
1 @2
2m @x2
(2.40) -->

In this way of looking at things, the Hamiltonian contains no trace of the flux. Instead, it will arise from the boundary conditions that we place on the wavefunction. 

We will not require that the wavefunction is single valued, but instead that it comes back to itself up to some specified phase , so that 

<!-- (x + 2⇡R) = ei
(x) -->

The eigenstates of (2.40) with this requirement are

<!-- =p
1
ei(n+ /2⇡)x/R
2⇡R
n2Z -->

The energy of these states is again given by (2.39). We learn that allowing for more general wavefunctions doesn’t give any new physics. 

Instead, it allows for a different perspective on the same physics, in which the presence of the flux does not appear in the Hamiltonian. But instead, it is shifted to the boundary conditions imposed on the wavefunction. 

In this framework, the phase is sometimes said to be a “hidden” parameter because you don’t see it directly in the Hamiltonian.

We can now ask this same question for Yang-Mills. We’ll start with Yang-Mills theory in the absence of a ✓ term and will see how we can recover the states with ✓ 6= 0. 

Here, the analog question is whether the wavefunction 0 (A) should really be gauge invariant, or whether we can suffer an additional phase under a gauge transformation. 

The phase that the wavefunction picks up should be consistent with the group structure of gauge transformations: this means that we are looking for a one-dimensional representation (the phase) of the group of gauge transformations. 

Topologically trivial gauge transformations (which have n(⌦) = 0) can be continuously connected to the identity. 

For these, there’s no way to build a non-trivial phase factor consistent with the group structure: it must be the case that 0 (A0 ) = 0 (A) whenever A0 = ⌦A⌦ 1 + i⌦r⌦ 1 with n(⌦) = 0. 

However, things are different for the topologically non-trivial gauge transformations.

As we’ve seen above, these are labelled by their winding n(⌦) 2 Z. One could require that, under these topologically non-trivial gauge transformations, the wavefunction changes as:

<!-- 0
i✓n
0 (A ) = e
0 (A)
(2.41) -->

for some choice of ✓ 2 [0, 2⇡). This is consistent with consecutive gauge transformations because n(⌦1 ⌦2 ) = n(⌦1 ) + n(⌦2 ). 

In this way, we introduce an angle ✓ into the definition of the theory through the boundary conditions on wavefunctions.

The discussion above is just another way of stating our earlier results. 

Given a wavefunction which transforms as (2.41), we can always dress it with a Chern-Simons functional as in (2.38) to construct a single-valued wavefunction. 

These are just 2 different paths that lead to the same conclusion. We’ve highlighted the “hidden” interpretation here in part because it is often the way the ✓ angle is introduced in the literature. 

Moreover, as we will see in more detail in Section 2.3, it is closer in spirit to the way the ✓ angle appears in semi-classical tunnelling calculations.


## Another Analogy: Bloch Waves

There’s another analogy which is often wheeled out to explain how ✓ affects the states.

This analogy has some utility, but it also has some flaws. I’ll try to highlight both below.

So far our discussion of the ✓ angle has been for all states in the Hilbert space. For this analogy, we will focus on the ground state. 

Moreover, we will work “semi-classically”, which really means “classically” but where we use the language of wavefunctions. 

This approximation is not valid: as we will see in Section 2.4, Yang-Mills theory is strongly coupled quantum theory, and the true ground state will bear
no resemblance to the classical ground state. 

The purpose of what follows is merely to highlight the basic structure of the Hilbert space. 

With these caveats out the way, let’s proceed. The classical ground states of Yang-Mills are pure gauge configurations. This means that they take the form

<!-- A = iV rV
– 49 –
1
(2.42)for some V (x) 2 G.  -->

But, as we’ve seen above, such configurations are labelled by the integer n(V ). 

This is a slightly different role for the winding: now it is labelling the zero energy states in the theory, as opposed to gauge transformations. 

At the semi-classical level, the configurations (2.42) map into quantum states. Since the classical configurations are labelled by an integer n(V ), this should carry over to the quantum Hilbert space. We call the corresponding ground states |ni with n 2 Z.

If we were to stop here, we might be tempted to conclude that Yang-Mills has multiple ground states, |ni. But this would be too hasty. 

All of these ground states are connected by gauge transformations. But the gauge transformations itself must have non-trivial topology. 

Specifically, if ⌦ is a gauge transformation with 

<!-- n(⌦) = n0 then ⌦|ni =
|n + n0 i. -->

The true ground state, like all states in the Hilbert space, should obey (2.41). For our states, this reads

<!-- 0
⌦| i = ei✓n | i -->


This means that the physical ground state of the system is a coherent sum over all the
states |ni. It takes the form:

<!-- X
|✓i =
ei✓n |ni
(2.43)
n -->

This is the semi-classical approximation to the ground state of Yang-Mills theory. These states are sometimes referred to as theta vacua. 

Once again, I stress that the semi-classical approximation is a rubbish approximation in this case! 

This is not close to the true ground state of Yang-Mills.

Now to the analogy, which comes from condensed matter physics. 

Consider a particle moving in a one-dimensional periodic potential 
V (x) = V (x + a)

Classically there are an infinite number of ground states corresponding the minima of
the potential. We describe these states as |ni with n 2 Z. 

However, we know that these aren’t the true ground states of the Hamiltonian. These are given by Bloch’s theorem which states that all eigenstates have the form
<!-- X
|ki =
eikan |ni
(2.44)
n -->

for some k 2 [ ⇡/a, ⇡/a) called the lattice momentum. Clearly there is a parallel between (2.43) and (2.44). 

In some sense, the ✓ angle plays a role in Yang-Mills similar to the combination ka for a particle in a periodic potential. 

This similarity can be traced to the underlying group theory structure. In both cases there is a Z group action on the states. 

For the particle in a lattice, this group is generated by the translation operator; for Yang-Mills it is generated by the topologically non-trivial gauge transformation with n(⌦) = 1.

There is, however, an important difference between these two situations. 

For the particle in a potential, all the states |ki lie in the Hilbert space. Indeed, the spectrum famously forms a band labelled by k. 

In contrast, in Yang-Mills theory there is only a single state: each theory has a specific ✓ which picks out one state from the band. 

This can be traced to the different interpretation of the group generators. The translation operator for a particle is a genuine symmetry, moving one physical state to another. 

In contrast, the topologically non-trivial gauge transformation ⌦ is, like all gauge transformations, a redundancy: it relates physically identical states, albeit it up to a phase.
