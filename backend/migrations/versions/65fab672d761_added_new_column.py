"""Added new column

Revision ID: 65fab672d761
Revises: 
Create Date: 2025-02-08 02:21:10.668446

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '65fab672d761'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('event', schema=None) as batch_op:
        batch_op.add_column(sa.Column('detail', sa.String(length=255), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('event', schema=None) as batch_op:
        batch_op.drop_column('detail')

    # ### end Alembic commands ###
