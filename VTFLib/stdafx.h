/*
 * VTFLib
 * Copyright (C) 2005-2011 Neil Jedrzejewski & Ryan Gregg

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later
 * version.
 */

// ============================================================
// NOTE: This file is commented for compatibility with Doxygen.
// ============================================================
/*!
    \file StdAfx.h
    \brief Application framework header plus VTFLib custom data types.
*/

#ifndef STDAFX_H
#define STDAFX_H

#ifdef VTFLIB_EXPORTS
#	define VTFLIB_API
#else
#	define VTFLIB_API
#endif

// Custom data types
typedef unsigned char	vlBool;				//!< Boolean value 0/1.
typedef char			vlChar;				//!< Single signed character.
typedef unsigned char	vlByte;				//!< Single unsigned byte.
typedef signed short	vlShort;			//!< Signed short floating point value.
typedef unsigned short	vlUShort;			//!< Unsigned short floating point value.
typedef signed int		vlInt;				//!< Signed integer value.
typedef unsigned int	vlUInt;				//!< Unsigned integer value.
typedef signed long		vlLong;				//!< Signed long number.
typedef unsigned long	vlULong;			//!< Unsigned long number.
typedef float			vlSingle;			//!< Floating point number
typedef double			vlDouble;			//!< Double number
typedef void			vlVoid;				//!< Void value.

typedef unsigned char		vlUInt8;
typedef unsigned short	vlUInt16;
typedef unsigned long	vlUInt32;
typedef unsigned long long	vlUInt64;

typedef vlSingle		vlFloat;			//!< Floating point number (same as vlSingled).

#define vlFalse			0
#define vlTrue			1

#define FILE_BEGIN 0

#if _MSC_VER >= 1400
#	define _CRT_SECURE_NO_WARNINGS
#	define _CRT_NONSTDC_NO_DEPRECATE
#endif

#define WIN32_LEAN_AND_MEAN
//#include <windows.h>
#include <stdlib.h>
#include <stdio.h>
#include <assert.h>
#include <math.h>
#include <stdarg.h>
#include <string.h>
#include <stdlib.h>

#if _MSC_VER >= 1600 // Visual Studio 2010
#	define STATIC_ASSERT(condition, message) static_assert(condition, message)
#else
#	define STATIC_ASSERT(condition, message) typedef char __C_ASSERT__[(condition) ? 1 : -1]
#endif

#endif
