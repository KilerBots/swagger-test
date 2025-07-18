// pages/api/zones.js

/**
 * @swagger
 * /api/zones:
 *   get:
 *     summary: Get all zones
 *     tags: [Zones]
 *     responses:
 *       200:
 *         description: A list of zones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(['Zone A', 'Zone B']);
  }
}
