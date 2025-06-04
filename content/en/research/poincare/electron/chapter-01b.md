---
heading: Chapter 1b
title: The Lorentz Transformation
weight: 4
# date: 2022-02-28
description: The aberration of light and the related optical and electrical phenomena seems to provide us a means of determining the absolute motion of the Earth
c: "darkgoldenrod"
author: "H. Poincare"
icon: "Henri Poincare"
draft: true
---


We must now compare the force before and after transformation.

Let X, Y, Z be the force before, and X', Y', Z' the force after transformation, both related to unit
volume. In order for X' to satisfy the same equations as before the transformation, we must
have:

or, replacing all quantities by their values (4), (4bis) and (9) and taking into account equations (2):

(11)

If we represent the components of the force X1, Y1, Z1, not per unit volume, but per unit of
electric charge of the electron, and X'1, Y'1, Z'1 are the same quantities after the transformation,
we would have:

and we would have the equations(11bis)


Lorentz found [with different notation, page 813, formula (10)]:
(11ter)

Before going further, it is important to investigate the cause of this significant discrepancy. It is
obvious that the formulas for ξ', η', ζ' are not the same, while the formulas for the electric and
magnetic fields are the same.

If the inertia of electrons is exclusively of electromagnetic origin, if in addition they are subject only
to forces of electromagnetic origin, the equilibrium condition requires that we have inside the
electrons:

But in virtue of equations (11) those relations are equivalent to
The equilibrium conditions of the electrons are not altered by the transformation.
Unfortunately, a hypothesis as simple as that is unacceptable. If, indeed, we assume
, the conditions
entrain
, and consequently
, i.e. ρ = 0. We arrive at similar results in the most general case. We must therefore
admit that there are, in addition to electromagnetic forces, either other forces or bindings. It is
necessary to search for conditions which must satisfy these forces or bindings, so that the
equilibrium of the electron is not disturbed by the transformation. This will be the subject of a
later paragraph.

§ 2. — Principle of least actionWe know how Lorentz deduced his equations from the principle of least action.

I will return to
this question, even though I have nothing substantial to add to the analysis of Lorentz, because I
prefer to present it in a slightly different form which will be useful for my purpose. 

I will pose:
(1)
assuming that f, α, F, u, etc.. are subject to the following conditions and the ones deduced by
symmetry:

(2)
Regarding the integral J, it must be extended:

I° in relation to the volume element dτ = dx dy dz over the whole space;
2° in relation to time t, over the interval between the limits t = t0, t = t1.
According to the principle of least action, the integral J must be a minimum, if one sets the
various quantities which appear in:

1° the conditions (2);
2° the condition that the state of the system is determined by both limiting times t = t0, t = t1.
This last condition allows us to transform our integral by partial integration with respect to time.
If we have indeed an integral of the form
where C is a quantity that defines the system state and its variation δC, it will be equal to (by
partial integration with respect to time):

Since the system state is determined by both limiting times, it is δC = 0 for t = t0, t = t1, so the
first integral which is related to these two periods is zero, and the 2nd one remains.
We can also integrate by parts with respect to x, y or z, we have indeedOur integrations are extended to infinity, it must be
in the first integral on the right-hand side; so, since we always assume that all our functions vanish at infinity, this integral will be zero and it follows
If the system is supposed to be subject to bindings, the binding conditions should be connected
to the conditions imposed on the various quantities appearing in the integral J.
Let us first give to F, G, H the increasements δF, δG, δH; where:
We should have
or, integrating by parts,
whence, by setting the arbitrary coefficient δF equal to zero,
(3)
This relationship gives us (by partial integration):or
hence finally:
(4)
Now, thanks to equation (3), δJ is independent from δF and thus δα; let us vary now the other
variables
It follows, by returning to expression (1) of J,
But f, g, h are first subject to conditions (2), so that
(5)
and for convenience we write:
(6)
The principles of variation calculus tells us that we must do the calculation as if ψ is an arbitrary
function, as if δJ is represented by (6), and as if the changes were no longer subject to the
condition (5).
We have in addition:
whence, after partial integration,
(7)If we assume at first that the electrons do not undergo a variation, ​δρ = δρξ = 0 and the second
integral is zero. Because δJ must vanish, we should have:
(8)
It remains in the general case:
(9)
It remains to determine the forces acting on the electrons. To do this we must suppose that a
supplementary force -Xdτ, -Ydτ, -Zdτ applies to each element of an electron, and write that this
force is in equilibrium with the forces of electromagnetic origin. Let U, V, W be components of
the displacement of the element dτ of the electron, where the displacement is counted from an
arbitrary initial position. Let δU, δV, δW be the variations of this displacement; the virtual work
corresponding to the supplementary force is:
so that the equilibrium condition about which we have spoken can be written:
(10)
It's about the transformation of δJ. To begin the search for the continuity equation, we express
how the charge of an electron is preserved by the variation.
Let x0, y0, z0 be the initial position of an electron. Its current position is:
We also introduce an auxiliary variable ε, which produces changes in our various functions, so
that for any function A we have:
It is indeed convenient to switch from the notation of variation calculus to that of ordinary
calculus, or vice versa.Our functions should be regarded: 1° as dependent on five variables x, y, z, t, ε, so that we can
remain at the same place when ε and t vary alone: we then indicate their derivatives by the
ordinary d; 2° as dependent on five variables x0, y0, z0, t, ε so that we may always follow a single
electron when t and ε vary alone, then we denote their derivatives by ∂. We will have then:
(11)
Denote now by Δ the functional determinant of x, y, z with respect to ​x0, y0, z0:
If ε, x0, y0, z0 remain constant, we give to t an increasement ∂t; to x, y, z the increasements ∂x0,
∂y0, ∂z0 will result; and to Δ the increasement ∂Δ, and there will be:
hence
We deduce:
(12)
The mass of each electron is invariable, we have:
(13)
where:
These are the different forms of the continuity equation with respect of variable t. We find similar
forms with respect to the variable ε. Either:it follows:
(11bis)
(12bis)
(13bis)
Note the difference between the definition of
and that of
, we note that
it is this definition of δU that suits to formula (10).
This equation will allow us to transform the first term of (9); we find in fact:
or, by partial integration,
(14bis)
Let us propose now to determine
.
Note that ρΔ does not depend on x0, y0, z0; indeed, if we consider an electron whose initial
position is a rectangular parallelepiped whose edges are dx0, dy0, dz0, the charge of this element
is
and this charge should remain constant, then:
(15)
We deduce:(16)
Now we know that for any function A, we have by the continuity equation,
and also
We thus have:
(17)
(17bis)
The right-hand sides of (17) and (17bis) must be equal, and if one remembers that
we get:
(18)
Transforming now the second term of (9); we get:
The right-hand side becomes by partial integration:Now note, that:
If, indeed, we develop Σ on the two sides of these relations, they become identities; and
remember that
the right-hand side in question will become:
so that finally:
Equating the coefficient of δU on both sides of (10) we get:
This is equation (2) of the preceding §.
§ 3. — The Lorentz transformation and the principle of least
action
Let us see if the principle of least action gives us the reason for the success of the Lorentz
transformation. We must look at the transformation of the integral:
(formula 4 of § 2).
We first findbecause x', y', z', t' are related to x, y, z, t by linear relations whose determinant is equal to l4; then
we have:
(1)
(formula 9 of § 1), hence:
so that if we set
we get:
J' = J.
However, to justify this equality, the integration limits have to be the same; so far we have
assumed that t varies from t0 to t1, and x, y, z from ∞ to + ∞. On this account the integration limits
would be affected by the Lorentz transformation, but nothing prevents us from assuming t0 =-
∞, t1 = + ∞; with those conditions the limits are the same for J and J'.
We then compare the following two equations analogues to equation (10) of § 2:
(2)
For this, we must first compare δU with δU.
Consider an electron whose initial coordinates are x0, y0, z0; its coordinates at the instant t are
If one considers the electron after the corresponding Lorentz transformation, it will have as
coordinates
wherebut it will only attain these coordinates at the instant
If we subject our variables to the variations δU, δV, δW, and when we give at the same time t an
increasement δt, the coordinates x, y, z will experience a total increasement
We will also have:
and in virtue of the Lorentz transformation:
hence, assuming δt = 0, the relations:
Note that
It follows, by replacing δt' by its value
If we recall the definition of k, we draw from this:
and alsohence
(3)
Now, in virtue of equations (2) we must have:
By replacing ΣXδU by its value (3) and by identifying, it follows:
These are the equations (11) of § 1. The principle of least action leads us to the same result as
the analysis of § 1.
If we turn to formulas (1), we see that Σf2 - Σα2 is not affected by the Lorentz transformation,
except one constant factor; it is not the case with expression Σf2 + Σα2 which represents the
energy. If we confine ourselves to the case where ε is sufficiently small, so that the square can
be neglected so that k = 1, and if we also assume l = 1, we find:
or by addition
§ 4. — The Lorentz group
It is important to note that the Lorentz transformations form a group.
Indeed, if we set:
and in additionwith
it follows:
with
If we take for l the value 1, and we suppose ε infinitely small,
it follows:
This is the infinitesimal generator of the transformation group, which I call the transformation T1,
and which can be written in Lie's notation:
If we assume ε = 0 and l = 1 + δl, we find instead
and we would have another infinitesimal transformation t0 of the group (assuming that l and ε
are regarded as independent variables) and we would have with Lie's notation:
But we could give the y- or z-axes the special role, which we gave the x-axis; thus we have two
further infinitesimal transformations:which also would not alter the equations of Lorentz.
We can form combinations devised by Lie, such as
but it is easy to see that this transformation is equivalent to a coordinate change, the axes are
rotating a very small angle around the z-axis. We ​should not be surprised if such a change does
not alter the form of the equations of Lorentz, obviously independent of the choice of axes.
We are thus led to consider a continuous group which we call the Lorentz group and which
admit as infinitesimal transformations:
1° the transformation T0 which is permutable with all others;
2° the three transformations T1, T2, T3;
3° the three rotations [T1, T2], [T2, T3], [T3, T1].
Any transformation of this group can always be decomposed into a transformation of the form:
and a linear transformation which does not change the quadratic form
We can still generate our group in another way. Any transformation of the group may be
regarded as a transformation of the form:
(1)
preceded and followed by a suitable rotation.
But for our purposes, we should consider only a part of the transformations of this group; we
must assume that l is a function of ε, and it is a question of choosing this function in such a way
that this part of the group that I call P still forms a group.
Let's rotate the system 180° around the y-axis, we should find a transformation that will still
belong to P. But this amounts to a sign change of x, x', z and z'; we find:
(2)So l does not change when we change ε into -ε.
On the other hand, if P is a group, then the inverse substitution of (1)
(3)
must also belong to P; it will therefore be identical with (2), that is to say that
We must therefore have l = 1.
§ 5. — Langevin waves
Langevin has put the formulas that define the electromagnetic field produced by the motion of a
single electron in a particularly elegant form.
Let us remember the equations
(1)
We know we can integrate by the retarded potentials and we have:
(2)
In these formulas we have:
whereas ρ1 and ξ1 are the values of ρ and ξ at the point x1, y1, z1 and the instant
x0, y0, z0 being coordinates of a molecule of the electron at the instant t;
being its coordinates at the instant t1;
U, V, W are functions of x0, y0, z0, so that we can write:and if we assume t to be constant, as well as x, y and z:
We can therefore write:
so that the other two equations can deduced by circular permutation.
We therefore have:
(3)
we set
Consider the determinants that appear in both sides of (3) and at the begin of the first part; if we
seek to develop, we see that the terms of the 2d and 3rd degree from ξ1, η1, ζ1 disappear and that
the determinant is equal to
ω designates the radial component of the velocity ξ1, η1, ζ1, that is to say, the component
directed along the radius vector indicating from point x, y, t to point x1, y1, z1.
In order to obtain the second determinant, I look at the coordinates of different molecules of the
electron at instant t', which is the same for all molecules, but in such a way that for the molecule
considered we have
. The coordinates of a molecule will then be:
U', V', W' is what become of U, V, W, when we replace t1 by t'1; since t'1 is the same for all
molecules, we have:
and thereforeby setting
But the element of electric charge is
and moreover for the molecule considered, we have t1 = t'1, and therefore
etc..; we
can write:
so that equation (3) becomes:
and equations (2):
If we are dealing with a single electron, our integrals are reduced to a single element, provided
we consider only the points x, y, x which are sufficiently remote so that r and ω have
substantially the same value for all points of the electron. The potentials ψ, F, G, H depend on the
position of the electron and also its velocity, because not only ξ1, η1, ζ1 show up in the numerator
of F, G, H, but the radial component ω shows up in the denominator. It is of course its position
and its velocity at the instant t1.
The partial derivatives of φ, F, G, H with respect to t, x, y, z (and therefore the electric and
magnetic fields) will also depend on its acceleration. Moreover, they depend linearly, since the
acceleration in these derivatives is introduced as a result of a single differentiation.
Langevin was thus led to distinguish the electric and magnetic field terms which do not depend
on the acceleration (this is what he calls the velocity wave) and those that are proportional to
acceleration (that is what he calls the acceleration wave).
The calculation of these two waves is facilitated by the Lorentz transformation. Indeed, we can
apply this transformation to the system, so that the velocity of the single electron underconsideration becomes zero. We will use for the x-axis the direction of the velocity before the
transformation, so that, at the instant t1,
and we will take ε = -ξ, so that
We can therefore reduce the computation of the two waves to the case where the electron
velocity is zero. Let's start with the velocity wave, we first note that this wave is the same as if
the electron motion was uniform.
If the electron velocity is zero, then:
μ1 is the electrical charge of the electron. The speed was reduced to zero by the Lorentz
transformation, we have now:
r' is the distance from point x', y', z' at point x'1, y'1, z'1, and therefore:
Now let us carry out the reverse Lorentz transformation to find the true field corresponding to
the velocity ε, 0, 0. We find, with reference to equations (9) and (3) of § 1:
(4)
We see that the magnetic field is perpendicular to the x-axis (direction of velocity) and the
electric field, and the electric field is directed to the point:
(5)If the electron continues to move in a rectilinear and uniform way with the velocity it had at the
instant t1, that is to say, with the velocity -ε, 0, 0, the point (5) would be the one occupied at the
instant t.
Taking the acceleration wave, we can, through the Lorentz transformation, reduce its
determination to the case of zero velocity. This is the case if we imagine an electron whose
oscillation amplitude is very small, but very fast, so that the displacements and velocities are
much smaller, but the accelerations are finished. We thus come back to the field that has been
studied in the famous work by Hertz entitled Die Kräfte elektrischer Schwingungen nach der
Maxwell'schen Theorie, and that for a point at great distance. In these conditions:
I° Both electric and magnetic fields are equal.
2° They are perpendicular to each other.
3° They are perpendicular to the normal of the spherical wave, that is to say to the sphere whose
center is the point x1, y1, z1.
I say that these three properties will remain, even when the velocity is not zero, and for this it is
enough to show that they are not altered by the Lorentz transformation.
Indeed, let A be the intensity common to both fields, let
These properties expressed through the equalities
which means again that
are the direction cosines of three rectangular directions, and we deduce the relations:or
(6)
with the equations that we can deduce by symmetry.
If we take the equations (3) of § 1, we find:
(7)
We found above in § 3:
So
entrain
On the other hand, from equations (9) of § 1, we get:
This shows that
entrain
I say now that
(8)
Indeed, by virtue of equations (7) (and equations 9, § 1) the first parts of equations (8) are
written respectively:They then vanish in virtue of equations
and in virtue
of equations (6). Yet this is precisely what was demonstrated.
We can also achieve the same result by considerations of homogeneity.
Indeed, ψ, F, G, H are functions of
being homogeneous of
degree -1 with respect to x, y, z, t, x1, y1, z1, t1 and their differentials.
So the derivatives of ψ, F, G, H with respect to x, y, z, t (and hence also the two fields f, g, h; α, β, γ)
will be homogeneous of degree -2 with respect to the same quantities, if we remember also that
the relation
is homogeneous with respect to these quantities.
But these derivatives depend on these fields of x - x1, the velocities
, and the accelerations
; they consist of a term independent of accelerations (velocity wave) and a term linear in
respect to accelerations (acceleration waves). But
is homogeneous of degree 0 and
is homogeneous of degree -1; hence it follows that the velocity wave is homogeneous of degree
-2 with respect to x - x1, y - y1, z - z1, and the acceleration wave is homogeneous of degree -1. So
in a very distant point an acceleration wave is predominant and can therefore be regarded as
being assimilated to the total wave. In addition, the law of homogeneity shows that the
acceleration wave is similar to itself at a distance and at any point. It is therefore, at any point,
similar to the total wave at a remote point. But in a distant point the disturbance can propagate
as plane waves, so that the two fields should be equal, mutually perpendicular and perpendicular
to the direction of propagation.I shall refer for more details to a work by Langevin in the Journal de Physique (Year 1905).
§ 6. — Contraction of electrons
Suppose a single electron in rectilinear and uniform motion. From what we have seen, we can,
through the Lorentz transformation, reduce the study of the field determined by the electron to
the case where the electron is motionless; the Lorentz transformation replaces the real electron
in motion by an ideal electron without motion.
Let α, β, γ, f, g, h be the real field; let α', β', γ', f', g', h' be the ​field after the Lorentz transformation,
so the ideal field α', f' corresponds to the case where the electron is motionless; we have:
and the actual field (in virtue of the formulas 9 of § 1):
(1)
We now determine the total energy due to the motion of the electron, the corresponding action,
and the electromagnetic momentum, in order to calculate the electromagnetic mass of the
electron. For a distant point, it suffices to consider the electron as reduced to a single point; we
are thus brought back to the formulas (4) of the preceding § which generally can be appropriate.
But here they do not suffice, because the energy is mainly located in the ether parts nearest to
the electron.
On this subject we can make several hypotheses.
According to that of Abraham, the electrons are spherical and not deformable.
So when we apply the Lorentz transformation when the real electron is spherical, the electron
becomes a perfect ellipsoid. The equation of this ellipsoid is based on § 1:
But here we have:so that the equation of the ellipsoid becomes:
If the radius of the real electron is r, the axes of the ideal electron would therefore be:
In Lorentz's hypothesis, however, the moving electrons are deformed, so that the real electron
would become a ellipsoid, while the ideal electron is still always a perfect sphere of radius r; the
axes of the real electron will then be:
We denote by
the longitudinal electric energy; by
the transverse electric energy; by
the transverse magnetic energy. There is no longitudinal magnetic energy, since α = α' = 0. We
denote by A', B', C' the corresponding quantities in the ideal system. We first find:
In addition, we can observe that the actual field depends only on x = εt, y, and x, and write:
henceIn Lorentz's hypothesis we have B' = 2A', and A ' (being inversely proportional to the radius of
the electron) is a constant independent of the velocity of the real electron; we get for the total
energy:
and for the action (per unit time):
Now calculate the electromagnetic momentum; we find:
But there must be some relation between the energy E = A + B + C, the action per unit time H = A
+ B - C, and the momentum D. The first of these relations is:
the second is
hence
(2)
The second of equations (2) is always satisfied; but the first is so only if
that is to say if the volume of the ideal electron is equal to that of the real electron; or if the
volume of the electron is constant; that's the hypothesis of Langevin.
This is in contradiction with the results of § 4 and with the result obtained by Lorentz by
another way. That is the contradiction which is to be explained.
Before addressing this explanation, I note that whatever is the hypotheses we have adoptedor, because of C' = 0,
(3)
We can compare the result of the equation J = J' obtained in § 3.
We have indeed:
We observe that the state of the system depends only on x + εt, y and z, that is to say on x', y', z',
and we have:
(4)
By comparing equations (3) and (4) we find J = J'.
Let us consider any hypothesis, which may be either that of Lorentz, or that of Abraham, or that
of Langevin, or an intermediate hypothesis.
Let
the three axes of the real electron; that of the ideal electron will be:
Then A' + B' is the electrostatic energy of an ellipsoid with axes klr, θlr, θlr.
Let us suppose that the electricity is spread on the surface of the electron as it is known from an
inductor, or uniformly distributed within the electron; than this energy will be of the form:where φ is a known function.
The hypothesis of Abraham is to assume:
That of Lorentz:
That of Langevin:
We then find:
Abraham found, in different notation (Göttinger Nachrichten, 1902, p. 37)
a is a constant. However, in the hypothesis of Abraham, we have θ = 1; then:
(5)
which defines the function φ.
This granted, imagine that the electron is subject to a binding, so there is a relation between r
and φ; in the hypothesis of Lorentz this relation would be φr = const., in that of Langevin φ2r2 =
const. We assume in a more general way
b is a constant; hence:
What is the shape of the electron when the velocity become -εt, if we do not suppose the
involvement of forces other than the binding forces? Its form will be defined by the equality:(6)
or
or
If we want equilibrium to occur so that θ = k, it is necessary that
, the logarithmic
derivative of φ is equal to m.
If we develop
and the right-hand side of (5) in powers of ε, equation (5) becomes:
neglecting higher powers of ε. ​By differentiating, we get:
For ε = 0, that is to say when the argument of φ is equal to 1, these equations become:
(7)
We must therefore have
in conformity with the hypothesis of Langevin.
This result should come nearer to that which is connected to the first equation (a), and from
which actually it does not differ. Indeed, suppose that every element dτ of the electron is
subjected to a force Xdτ parallel to the x-axis, X is the same for all elements; we will then have, in
conformity with the definition of momentum:
In addition, the principle of least action gives us:δU is the displacement of the center of gravity of the electron; H depends on θ and on ε if we
assume that r is related to θ by the equation of binding; we have thus:
In addition
; where, by integrating by parts:
or
hence
But the derivative
, contained in the right-hand side of equation (2), is the derivative taken by
supposing θ as a function of ε, so that
Equation (2) is therefore equivalent to equation (6).
The conclusion is that if the electron is subject to a binding between its three axes, ​and if no
other force intervenes except the binding forces, the shape of that electron, when it is given a
uniform velocity, may be such that the ideal electron corresponds to a sphere, except the case
where the binding is such that the volume is constant, in conformity with the hypothesis of
Langevin.
We are led in this way to pose the following problem: what additional forces, other than the
binding forces, are necessary to intervene to account for the law of Lorentz or, more generally,
any law other than that of Langevin?
The simplest hypothesis, and the first that we should consider, is that these additional forces are
derived from a special potential depending on the three axes of the ellipsoid, and therefore on θand on r; let F(θ, r) be the potential; in which case the action will be expressed:
and the equilibrium conditions are written:
(8)
If we assume r and θ are connected by r = bθm, we can look at r as a function of θ, consider F as
depending only on θ, and retain only the first equation (8) with:
For k = θ we need equation (8) to be satisfied; which gives, taking into account equations (7):
where:
and in the hypothesis of Lorentz, where m = -1:
Now suppose that there is no connection and, considering r and θ as independent variables,
retain the two equations (H); it follows:
Equations (8) must be satisfied for k = θ, r = bθm; which gives:
(9)
One way to satisfy these requirements is to pose:
(10)A, α, β are constants, the equations (9) must be satisfied for k = θ, r = bθm, which gives:
By identifying we find
(11)
But the volume of the ellipsoid is proportional to r3θ2, so that the additional potential is
proportional to the power γ of the volume of the electron.
In the hypothesis of Lorentz, we have m = 1, γ = 1.
We thus come back to the hypothesis of Lorentz, under the condition of adding an additional
potential proportional to the volume of the electron.
The hypothesis of Langevin corresponds to γ = ∞.
§ 7. — Quasi-stationary motion
It remains to see if this hypothesis of the contraction of electrons reflects the inability to
demonstrate absolute motion, and I will begin by studying the quasi-stationary motion of an
isolated electron, or which is subject only to the action of other distant electrons.
It is known that what is called quasi-stationary motion is the motion where the velocity changes
are slow enough so that the electric and magnetic energy due to motion of the electron differ
little from what they would be in uniform motion; we know also that Abraham derived the
transverse and longitudinal electromagnetic masses from the notion of quasi-stationary motion.
I think I should clarify. Let H be our action per unit time:
where we consider for the moment only the electric and magnetic fields due to the motion of an
electron. In the preceding §, by considering the motion as uniform, we regarded H as dependent
from the velocity ξ, η, ζ of the electrons' center of gravity (the three components in the preceding
§, had as values -ε, 0, 0) and the parameters r and θ that define the shape of the electron.But if the motion is more uniform, H depend not only on the values of ξ, η, ζ, r, θ at the instant in
question, but on values of these quantities at other instants which may differ in quantities of the
same order as the time ​by light to travel from one point to another of the electron; in other words,
H depend not only on ξ, η, ζ, r, θ, but on their derivatives of all orders with respect to time.
Well, the motion is said to be quasi-stationary when the partial derivatives of H with respect to
the successive derivatives of ξ, η, ζ, r, θ are negligible compared to the partial derivatives of H
with respect to the quantities ξ, η, ζ, r, θ themselves.
The equations of such a motion can be written:
(1)
In these equations, F has the same meaning as in the preceding §, X, Y, Z are the components of
the force acting on the electron: this force is solely due to electric and magnetic fields produced
by other electrons.
Note that H is independent of ξ η ζ through the combination
that is to say, the magnitude of the velocity; therefore we still call D the momentum:
where:
(2)
(2bis)
with
(3)If we take the current direction of the velocity as the x-axis, we get:
equations (2) and (2bis) become:
and the last three equations (1):
(4)
This is why Abraham gave
the name longitudinal mass and
the name transverse mass;
recall that
In the hypothesis of Lorentz, we have:
represent the derivative with respect to V, after r and θ were replaced by their values as
functions of V from the first two equations (1); we will also have, after the substitution,
We choose units so that the constant factor A is equal to 1, and I pose
, hence:
We will pose again:
and we find the equation for quasi-stationary motion:
(5)
Let's see what happens to these equations by the Lorentz transformation. We will pose:
, and we have first:from which we derive easily
We also have
where:
where again:
and
(6)
(7)
Let us return now to equations (11bis) of § 1; we can regard X1, Y1, Z1 as having the same
meaning as in equations (5). On the other hand, we have l = 1 and
then become:
(8)
We calculate ΣX1ξ using equation (5), we find:
; these equationswhere:
(9)
Comparing equations (5) (6), (7) and (9), we finally find:
(10)
This shows that the equations of quasi-stationary motion are not altered by the Lorentz
transformation, but it still does not prove that the hypothesis of Lorentz is the only one that
leads to this result.
To establish this point, we will restrict ourselves, as Lorentz did, to certain particular cases; it
will be obviously sufficient for us to show a negative proposal.
How do we first extend the hypotheses underlying the above calculation?
1° Instead of assuming l = 1 in the Lorentz transformation, we assume any l.
2° Instead of assuming that F is proportional to the volume, and hence that H is proportional to
h, we assume that F is any function of θ and r, so that [after replacing θ and r with their values as
functions of V, from the first two equations (1)] H is any function of V.
I note first that, assuming H = h, we must have l = 1; and in fact the equations (6) and (7) remain,
except that the right-hand sides will be multiplied by
right-hand sides will be multiplied by
sides will be multiplied by
; so do equations (9), except that the
; and finally the equations (10), except that the right-hand
. If we want that the equations of motion are not altered by the
Lorentz transformation ​that is to say that the equations (10) only differ from equations (5) by
the accentuation of the letters, it must be assumed:
l = 1.
Suppose now that we have η = ζ = 0, where ξ = V,
; the equations (5) take the form:(5bis)
We can also pose:
If the equations of motion are not altered by the Lorentz transformation, we must have:
and therefore:
(11)
But we have:
where:
whence, by eliminating l2, we find the functional equation:or by posing
that is:
an equation that must be satisfied for all values of ξ and ε. For ζ = 0 we find:
where:
A is a constant, and I set
.
We then find:
Now
; so we have:
As l should depend only on ε (since, if there are more electrons, l must be the same for all
electrons whose velocities ξ may be different), this identity can take place only if we have:
Thus Lorentz's hypothesis is the only one consistent with the inability to demonstrate absolute
motion; if we accept this impossibility, we must admit that the moving electrons contract and
become ellipsoids of revolution where two axes remain constant; it must be admitted, as wehave shown in the previous §, the existence of an additional potential which is proportional to
the volume of the electron.
The analysis of Lorentz is therefore fully confirmed, but we can better give us an account of the
true reason of the fact which occupies us; and this reason must be sought in the considerations
of § 4. The transformations that do not alter the equations of motion must form a group, and this
can take place only if l = 1. As we do not recognize if an electron is at rest or in absolute motion,
it is necessary that, when in motion, it undergoes a distortion that must be precisely that which
imposes the corresponding transformation of the group. ​
§ 8. — Arbitrary motion
The above results apply only to quasi-stationary motion, but it is easy to extend them to the
general case; it suffices to apply the principles of § 3, that is to say, the principle of least action.
For the expression of the action
it is convenient to add a term representing the additional potential F of § 6; this term will
obviously have the form:
where Σ(F) represents the sum of the additional potential due to the different electrons, each of
which is proportional to the volume of the corresponding electron.
I write (F) in brackets to avoid confusion with the vector F, G, H.
The total action is then J + J1. We saw in § 3 that J is not altered by the Lorentz transformation,
we must show now that it is the same for J1.
We have for one electron,
ω0 being a special coefficient of the electron and τ its volume; so I can write:the integral has to be extended to the entire space, but so that the coefficient ω0 is zero outside
the electrons, and that within each electron it is equal to the special coefficient of that electron.
Then we have:
and after the Lorentz transformation:
Now we have ω0 = ω'0; for if a point belong to an electron, the corresponding point after the
Lorentz transformation still belongs to the same electron. On the other hand, we found in § 3;
and since we now assume l = 1
We have therefore
. ⁠
C.Q.F.D.
The theorem is thus general, it gives us at the same time a solution of the question we posed at
the end of § 1: finding the complementary forces which are unaltered by the Lorentz
transformation. The additional potential (F) satisfies this condition.
So we can generalize the result announced at the end of § 1 and write:
If the inertia of electrons is exclusively of electromagnetic origin, if they are only subject to forces
of electromagnetic origin, or to forces generated by the additional potential (F), no experiment can
demonstrate absolute motion.
So what are these forces that create the potential (F)? They can obviously be compared to a
pressure which would reign inside the electron; all occurs as if each electron were a hollow
capacity subjected to a constant internal pressure (volume independent); the work of this
pressure would be obviously proportional to the volume changes.
In any case, I must observe that this pressure is negative. Remember the equation (10) of § 6,
according to Lorentz's hypothesis we write:
;equations (11) of § 6 give us:
Our pressure is equal to A, with a constant coefficient, which is indeed negative.
Now assessing the mass of the electron – I mean the "experimental mass", that is to say the
mass for low velocities – we have (cf. § 6):
hence
I can write for very small V
so that the mass, both longitudinal and transverse, will be
.
Now a is a numerical constant which shows that: the pressure that creates our additional
potential is proportional to the 4th power of the experimental mass of the electron.
As Newton's law is proportional to the experimental mass, we are tempted to conclude that
there is some relation between the cause that generates gravitation and the one that generates
the additional potential.
§ 9. — Hypotheses on gravitation
Thus Lorentz's theory would completely explain the impossibility to demonstrate absolute
motion, if all forces are of electromagnetic origin.
But there are forces which we can not assign an electromagnetic origin, as for example
gravitation. It could happen, indeed, that two systems of bodies produce equivalent
electromagnetic fields, that is to say, exerting the same action on the electrified bodies and on
the currents, and yet these two systems do not exercise the same gravitational action on the
Newtonian mass. The gravitational field is thus distinct from the electromagnetic field. Lorentzwas thus forced to complete his hypothesis by assuming that forces of any origin, and in
particular gravitation, are affected by translation (or, if preferred, by the Lorentz transformation)
the same way as electromagnetic forces.
It is now convenient to enter into details and look more closely at this hypothesis. If we want
that the Newtonian force is affected in this way by the Lorentz transformation, we can not
accept that the force depends only on the relative position of the attracting body and of the body
attracted at the instant considered. It will also depend on the velocities of the two bodies. And
that's not all: it is natural to assume that the force acting at time t on the attracted body, depends
on the position and velocity of this body at the same time t; but it will depend, in addition, on the
position and velocity of the attracting body, not at time t, but a moment earlier, as if gravitation
needs a certain time to propagate.
Consider therefore the position of the attracted body at the instant t0 and, at this point, x0, y0, z0
are the coordinates, ξ, η, ζ the components of its velocity; consider the other attracting body at
the corresponding time t0 + t and, at this point, x0 + x, y0 + y, z0 + z are the coordinates, ξ1, η1, ζ1
the components of its velocity.
We must first have a relationship
(1)
to define the time t. This relation will define the law of propagation of the gravitational action (I
do not impose on me the condition that the propagation takes place with the same speed in all
directions).
Now let X1, Y1, Z1 the 3 components of the action exerted at time t0 on the body; we have to
express X1, Y1, Z1 as functions of
(2)
What are the conditions to fulfill?
1° The condition (1) shall not be altered by transformations of the Lorentz group.
2° The components X1, Y1, Z1 will be affected by the Lorentz transformations the same way as
electromagnetic forces designated by the same letters, that is to say, according to equations
(11bis) of § 1.
3° When two bodies are at rest, we will fall back to the ordinary law of attraction.It is important to note that in the latter case, the relation (1) disappears, because time does not
play any role if the two bodies are at rest.
The problem thus posed is obviously undetermined. We will thus seek to satisfy as many as
possible other additional conditions:
4° Astronomical observations do not appear to show significant derogation to Newton's law, we
will choose the solution that deviates the least of this law, for low velocities of two bodies.
5° We will endeavor to arrange that T is always negative; if indeed it is conceived that the effect
of gravitation takes a certain time to be propagated, it would be more difficult to understand how
this effect could depend on the position not yet attained by the attracting body.
There is one case where the indeterminacy of the problem disappears; it is where the two bodies
are at rest relative to each other, that is to say that:
;
this is the case we will consider first, assuming that these velocities are constant, so that the
two bodies are drawn into a common translational motion, rectilinear and uniform.
We can assume that the axis of x has been taken parallel to the translation, so that η = ζ = 0, and
we take ε = -ξ.
If in these circumstances we apply the Lorentz transformation, after the transformation the two
bodies are at rest and we have:
Then the components x'0, Y'0, Z'0 must conform to Newton's law and we will have a constant
factor:
(3)
But we have, according to § 1:We have also:
and
(4)
which can be written:
(4bis)
It seems at first sight that the indetermination remains, since we have made no hypothesis
about the value of t, that is to say about the speed of transmission; and that also x is a function
of t, but it is easy to see that x - ξt, y, z (which appear in our formulas) do not depend on t.
We see that if two bodies are simply in motion by a common translation, the force acting on the
body is drawn normal to an ellipsoid with its center at the attracting body.
To go further we must look for the invariants of the Lorentz group.
We know that the substitutions of this group (assuming l = 1) are linear substitutions which do
not affect the quadratic form
Let on the other hand:we see that the Lorentz transformation will cause to make δx, δy, δz and δ1x, δ1y, δ1z, δ1t
undergo the same linear substitutions as with x, y, z, t.
We regard
as the coordinates of three points P, P', P" in a 4-dimensional space. We see that the Lorentz
transformation is a rotation of that space around the origin, regarded as fixed. We shall therefore
have no other distinct invariants than 6 distances of the 3 points P, P', P" between them and the
origin, or, if you like ​it better, than the 2 expressions:
or the 4 expressions of the same form, deduced from permuting (in an arbitrary way) the three
points P, P', P".
But what we look for are the functions of 10 variables (2) that are invariants; so we must, among
the combinations of our 6 invariants, seek those which depend only on these 10 variables, that is
to say those that are homogeneous of degree 0 as compared to δx, δy, δz, δt, as compared to
δ1x, δ1y, δ1z, δ1t. We will thus have 4 distinct invariants, which are:
(5)
Let us now consider the transformations undergone by the components of the force; resume the
equations (11) of § 1, which relate not to the force X1, Y1, Z1, which we consider here, but to the
force X, Y, Z referred to unit volume. We pose also:
we see that these equations (11) can be written as (l = 1):
(6)so that X, Y, Z, T undergo the same transformation as x, y, z, t. The invariants of the group are
therefore
But this is not X, Y, Z which we need, it is X1, Y1, Z1 with
We see that
So the Lorentz transformations act on X1, Y1, Z1, T1 in the same manner as X, Y, Z, T, with the
difference that these expressions are also multiplied by
Similarly it would act on ξ, η, ζ, 1, in the same manner as δx, δy, δz, δt, with the difference that
these expressions are also multiplied by the same factor:
Consider then
as the coordinates of a fourth point ​Q, then the invariants are
functions of mutual distances of five points
and among these functions we must retain only those that are homogeneous of degree 0, on the
one hand in relation to
(variables that can then be replaced by X1, Y1, Z1, T1, ξ, η, ζ, 1), on the other hand in relation to
(variables that can be replaced later by ξ1, η1, ζ1, 1).
Thus we find in addition to the four invariants (5), four new distinct invariants, which are:(7)
The last invariant is always zero, according to the definition of T1.
This granted, what are the requirements?
1° The left-hand side of relation (1), which defines the velocity of propagation must be a function
of the four invariants (5)
One can obviously make a lot of hypotheses, we only look at two:
A) It may be
where t = ±r, and since t must be negative, t = -r. This means that the propagation velocity is
equal to that of light. At first it seems that this hypothesis should be rejected without
consideration. Laplace has indeed shown that this propagation is either instantaneous, or much
faster than light. But Laplace had considered the hypothesis of finite speed of propagation,
ceteris non mutatis; here, however, this hypothesis is complicated by many others, and it may
happen that there is a more or less perfect compensation, as the applications of the Lorentz
transformation gave us already so many examples.
B) It may be
The propagation velocity is much faster than that of light, but in some cases t may be negative,
which, as we have said, seems hardly acceptable. We will add this to hypothesis (A).
2° The four invariants (7) must be functions of the invariants (5).
3° When the two bodies are in absolute rest, X1, Y1, Z1 must have the value ​deduced from the law
of Newton, and when they are in relative rest, the value deduced from the equations (4).
Under the hypothesis of absolute rest, the first two invariants (7) must be reduced toor by Newton's law at
secondly, in hypothesis (A), the 2nd and 3rd of the invariants (5) become:
that is to say, for absolute rest, to
.
We may therefore assume for example that the first two invariants (4) are reduced to
but other combinations are possible.
We must choose between these combinations, and secondly, in order to define X1, Y1, Z1 we
need a third equation. For such a choice, we must endeavor to bring us closer as much as
possible to the law to Newton. Let's see what happens when (always making t = -r ) we neglect
the squares of the velocities ξ η etc.. The 4 invariants (5) then become:
and the 4 invariant (7):
But to be able to compare it with the law of Newton, another transformation is needed; here x0 +
x, y0 + y, z0 + z are the coordinates of the attracting body at the instant t0 + x, and
in the law of Newton it is necessary to consider the coordinates x0 + x1, y0 + y1, z0 + z1 of the
attracting body at the instant t0, and the distance
.
We can neglect the square of time t required for the propagation and therefore proceed as if the
movement was uniform, then we have:
;or, since t = -r,
so that our 4 invariants (5) become:
and our 4 invariants (7):
In the second of these expressions I wrote r1 instead of r, because r is multiplied by ξ - ξ1 and I
neglect the square of ξ.
On the other hand, Newton's law would us give for these 4 invariants (7)
So if we denote the 2nd and 3rd invariants (7) by A and B, and the 3 first invariants (7) by M, N, P,
we will satisfy Newton's law up to terms of order of the square velocities, by:
(8)
This solution is not unique. Indeed, let C be the fourth invariant (5), C - 1 is of the order of the
square of ξ, and it is equal to (A - B)2.
So we could add to the 2ds members of each of equations (8) a term consisting of C - 1
multiplied by an arbitrary function of A, B, C, and a term of the form of (A - B)2 also multiplied by
a function of A, B, C.
At first sight, the solution (8) seems the most straightforward, it may nevertheless be adopted
and in effect – since M, N, P are functions of X1, Y1, Z1 and
– we can draw from
these three equations (8) the values of X1, Y1, Z1, but in some cases these values become
imaginary.
To avoid this, we will operate in another way. Let:This is justified by the analogy with the notation
which appears in the substitution of Lorentz.
In this case, and because of the condition, -r = t, the invariants (5) become:
On the other hand, we see that the following systems of quantities:
undergo the same linear substitutions when we apply the transformations of the Lorentz group.
We are thus led to pose:
(9)
It is clear that if α, β, γ are invariants, X1, Y1, Z1, T1 satisfy the basic condition, that is to say, it will
undergo, by the effect of the Lorentz transformations, a suitable linear substitution.
But for the equations (9) to be consistent, we must have:
which, by replacing X1, Y1, Z1, T1 by their values (9) and multiplying by k02, becomes:(10)
What we want is, if we neglect the square of speed of light, the squares of the velocities ξ, etc.,
as well as the product of accelerations by the distances as we did above, so that the values of
X1, Y1, Z1 remain in conformity with the law of Newton.
We can take:
With the order of approximation adopted, we have:
The first equation (9) becomes:
But if we neglect the square of ξ, we can replace Aξ1 by -r1ξ1, or ​by -rξ1, which gives:
Newton's law would give:
We must therefore choose, for the invariant α, one that reduces to
approximation adopted, that is to say
(11)
. The equations (9) become:
to the order ofWe first see that the corrected attraction is composed of two components, one parallel to the
vector joining the positions of the two bodies, the other parallel to the velocity of the attracting
body.
Recall that when we talk about the position or velocity of the attracting body, it is its position or
its velocity when the gravitational wave leaves; for the body attracted, on the contrary, it is its
position or its velocity when the gravitational wave reaches it, the wave is assumed to propagate
with the speed of light.
I think it would be premature to push further discussion of these formulas, I will confine myself
to a few remarks.
1° The solutions (11) are not unique; we can indeed replace
which enters in the factor
everywhere, by
,
f1 and f2 are arbitrary functions of A, B, C; or we are taking β no longer as zero but adding
arbitrary complementary terms to α β γ, provided they satisfy the condition (10) and are of the
2nd order with regard to ξ as far as α is concerned, and of the 1st order as far as β and γ are
concerned.
2° The first equation (11) can be written:
(11bis)
and the quantity in brackets can, itself, written as:
(12)
so that the total force can be divided into three components corresponding to the three brackets
of expression (12); the first component has a vague analogy with the mechanical force due to
the electric field, the other two with mechanical forces due to a magnetic field; to complete the
analogy I can, under the first point, replace
by
in equations (11), so that X1, Y1, Z1 only
depend linearly on the velocity ξ, η, ζ of the attracted body, since C has disappeared from the
denominator of (11bis).
We pose then:(13)
it follows that C had disappeared from the denominator of (11a):
(14)
and there will also:
(15)
Then λ, μ, ν or
is a kind of electric field, while λ', μ', ν' or rather
is a
kind of magnetic field.
3° The postulate of relativity would require us to adopt solution (11) or solution (14) or any
solution that would inferred by using the first remark; but the first question that arises is whether
they are compatible with astronomical observations; the discrepancy with Newton's law is of
the order ξ2, that is to say, 10000 times smaller when it were of order ξ, that is to say, if the
propagation happens with the speed of light, ceteris non mutatis; it is permissible to hope that it
will not be too great. But only a thorough discussion will be able to teach it to us.
Paris, July 1905.
H. Poincaré
1. Langevin was preceded by M. Bucherer from Bonn, who had put forward the same theory
before. (See: Bucherer, Mathematische Einführung in die Elektronentheorie; August 1904.
Teubner, Leipzig).
This work is a translation and has a separate copyright status to the applicable copyright
protections of the original content.Original:
This work was published before January 1, 1927, and is in the public domain
worldwide because the author died at least 100 years ago.
This work is released under the Creative Commons Attribution-ShareAlike
Translation:
3.0 Unported license, which allows free use, distribution, and creation of
derivatives, so long as the license is unchanged and clearly noted, and the
original author is attributed.
Retrieved from
"https://en.wikisource.org/w/index.php?
title=Translation:On_the_Dynamics_of_the_Electron
_(July)&oldid=10817513"
Last edited 1 year ago by ShakespeareFan00
Wikisource