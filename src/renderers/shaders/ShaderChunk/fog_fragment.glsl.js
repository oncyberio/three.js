export default /* glsl */`
#ifdef USE_FOG


	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	#ifdef USE_FOG_TEXTURE

		vec3 p = normalize(cameraPosition.xyz - vFogPosition.xyz);
	
		vec3 fogColor = texture2D( fogTexture,  SampleSphericalMap(p)).rgb;

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );


#endif
`;
