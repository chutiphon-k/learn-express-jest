import fastify from '../src/app'

describe('flow api', () => {
	describe('GET /api', () => {
		test('should success', () => {
			expect(100).toBe(100)
		})

		test('should return 100', () => {
			fastify.inject({
				method: 'GET',
				url: '/api'
			}, res => {
				expect(res.statusCode).toBe(200)
				expect(JSON.parse(res.payload).a).toBe(100)
			})
		})
	})

	describe('GET /api/a', () => {
		test('should return 100 + a', () => {
			fastify.inject({
				method: 'get',
				url: '/api/a?a=123',
			}, res => {
				expect(res.statusCode).toBe(200)
				expect(JSON.parse(res.payload).a).toBe(223)
			})
		})
	})

	describe('POST /api', () => {
		test('should return a', () => {
			fastify.inject({
				method: 'post',
				url: '/api',
				payload: {
					a: 321
				}
			}, res => {
				expect(res.statusCode).toBe(200)
				expect(JSON.parse(res.payload).a).toBe(321)
			})
		})
	})
})

afterAll(() => {
	fastify.close()
})